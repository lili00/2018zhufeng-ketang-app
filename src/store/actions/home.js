import * as Types from '../action-types';
import {getSliders,getLessons} from '../../api/home'
let actions = {
  // 更新当前选择的课程
  updateCurrentLesson(lesson){
    return {type:Types.SET_CURRENT_LESSON,lesson}
  },
  getSlidersAPI(){
    return function (dispatch,getState) { // redux-thunk
      dispatch({type:Types.SET_SLIDERS,payload:getSliders()}); //redux-promise的用法 可以将payload的promise执行，执行后将内容放到action.payload中进行派发 {type:'SET_SLIDERS',payload:[{},{},{}]}
    }
  },
  getLessonsAPI(){
    // 这里要获取数据
    return function (dispatch,getState) { // store.getState
      //请求时需要判断是否有更多
      let {
        currentLesson,
        lesson:{hasMore,offset,limit}
      } = getState().home;
      // 如果发送请求 还需要派发一个改loading的一个方法
      if(!hasMore)return;
      // 发送请求之前 状态变成了正在加载
      dispatch({type:Types.CHANGE_LOADING_STATUS,status:true});
      // 之后发送ajax请求
      dispatch({type:Types.SET_LESSONS,payload:getLessons(offset,limit,currentLesson)});
    }
  }
};
export default actions;