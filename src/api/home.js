//获取轮播图
import axios from './index';
// 每个接口返回的都是promise
export function getSliders() {
  return axios.get('/sliders')
}
// 获取所有课程 offset limit type
export function getLessons(offset,limit,type) {
  return axios.get(`/lessons/${offset}/${limit}/${type}`);
}