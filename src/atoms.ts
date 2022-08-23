import { atom, selector } from "recoil";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}


export const isDarkAtom = atom({
    key:"isDark",
    default:false,
})
export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: "category",
  default: Categories.TO_DO,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  default: [],
});

// useRecoilState는 atom 값을 수정하고 싶을때 사용.
// selector는 atom의 결과값을 이리 저리 요리하고 싶을때 사용.
// set 은 atom을 변경시키고 싶을 때 사용할 수 있다.
export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
    
  },
});

// 유저로 하여금 board를 추가시키게 할 수 있다.
// 그렇다면 to_do, doing, done 외에도 추가시킬 수 있게 하기 위해
// interface를 통해 주어진 3개만 있는게 아니라고 알려준다.
interface ItrelloToDoState {
  [key:string]:string[];
}

export const trelloToDoState = atom<ItrelloToDoState>({
  key:"trelloToDo",
  default:{
    to_do: ['a','b'],
    doing: ['c','d','e'],
    done:['f'],
  },
});