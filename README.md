# component 만들기 --폴더 #react2 참조
![image](https://github.com/3dodam/react_basic/assets/129016953/cec14a4b-71e7-4f48-bfe1-11f182a0f205)

## 🐱‍👤JSX 문법에서 javaScript를 사용할 때는 {} 중괄호를 사용한다.
## html의 class를 react에서 만들 때는 className="" 형식으로 만든다.
![image](https://github.com/3dodam/react_basic/assets/129016953/8942c273-9c08-4fdd-8084-1cdafe9346d3)

## 😧return문은 반드시 하나의 태그로 되어있어야 한다.
![image](https://github.com/3dodam/react_basic/assets/129016953/92146597-091f-4723-9272-608575ca0594)

## 해결방법 부모태그로 감싸주어야 한다. (ex:<div>) 또는 Fagment로 싸주어야 한다. (사진참고)
![image](https://github.com/3dodam/react_basic/assets/129016953/a170c3b7-06d1-4594-9175-0a6162b21350)

## 함수 만들기
![image](https://github.com/3dodam/react_basic/assets/129016953/39318478-b579-4d00-9332-08768bfc373c)

  ## 화살표 함수로 변경
  ![image](https://github.com/3dodam/react_basic/assets/129016953/e432f9ba-726f-4a27-9235-0076872b71fc)

  ## 👆클릭하면 함수실행 (이벤트 핸들러 event handling)
  매개변수를 실행하기 위해 onClick에 function문을 만들어 넣음
  일반적으로 함수를 빼내어 밖에서 작성 후 사용한다.
![image](https://github.com/3dodam/react_basic/assets/129016953/1d15f571-a7e4-494f-8c17-0144cd0a8396)
![image](https://github.com/3dodam/react_basic/assets/129016953/58315b9e-b18b-4c5e-b11d-db5dda1ff004)
  
  ## console에는 숫자가 바뀌어지는데 화면에선 바뀌지 않는다.
  ## react에서는 변수가 바뀐다해서 리렌더링이 일어나지 않는다.
  (리렌더링이 일어날 시 더해진 number가 number로 들어가 number+2가 됨)
  ==>해결책: 리렌더링이 일어나게 하려면 useState(react Hook)를 사용해야 한다.
  ![image](https://github.com/3dodam/react_basic/assets/129016953/9a118cca-8e65-4847-a5e7-1e380acf2bd0)
  ![image](https://github.com/3dodam/react_basic/assets/129016953/93e0bb4e-e3ac-43cc-8644-3b7848101726)

