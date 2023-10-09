import axios from 'axios'

function* testGenerator(){
  yield axios('https://hmajax.itheima.net/api/city?pname=北京')
  yield axios('https://hmajax.itheima.net/api/city?pname=上海')
}

const test = testGenerator()
test.next().value.then((res) => {
  console.log(res);
})


// console.log(test.next());
// console.log(test.next());