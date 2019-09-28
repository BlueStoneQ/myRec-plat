/**
 * 根文件
 */
import ipg from '$public/assets/images/heart.jpg';

const test = () => {
  const imgDom = document.createElement('img');
  const rootDom = document.getElementById('root');
  imgDom.src = ipg;
  rootDom.appendChild(imgDom);
  console.log('12345678 start: ');
}

test();