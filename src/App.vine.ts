import { ref } from "vue";

export function App(props: {}) {
  const count = ref(0);
  const increment = () => void (count.value += 1);

//   vineStyle(`
//     .count{
//       display: flex;
//     }
//     `);
  return vine`
    <button @click="increment()">count {{ count }}</button>
  `;
}
