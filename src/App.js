import { useCallback, useEffect, useMemo, useState } from "react";
import Child from "./components/Child";

function App() {
  const [isReady, setIsReady] = useState(false)
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [valuesSum, setValuesSum] = useState(0);

  useEffect(() => {
    setValuesSum(value1+value2)
    console.log('Sum between v1 and v2 is ', value1+value2)
  },[value1, value2])


  //O useCallback grava a referencia da função para ser compartilhada, isso melhora seu desempenho pois sua referencia é instanciada apenas uma vez.
  const handleSetValue1 = useCallback(() => {
    setValue1(value1 + 1)
  }, [value1]);

  const handleSetValue2 = useCallback(() => {
    setValue2(value2 + 1)
  }, [value2]);


  //O useMemo tem a mesma função do useCallback, porem este irá gravar a referencia de valores que dependem da execução de um método.
  const someColor = useMemo(() => {
    setIsReady(false)
    for (let i = 0; i < 10 ** 9; i++) {
      i += 1;
      i -= 1;
    }
    setValuesSum(value1+value2)
    setIsReady(true)
    if (valuesSum % 2 === 0) return 'red'
    if (valuesSum % 3 === 0) return 'blud'
    if (valuesSum % 5 === 0) return 'green'
    else return 'orange'

  }, [valuesSum])


  return (
    <div className="App">
      <Child value={value1} setValue={handleSetValue1} name="child1" color={someColor} />
      <Child value={value2} setValue={handleSetValue2} name="child2" color={someColor} />
    </div>
  );
}

export default App;
