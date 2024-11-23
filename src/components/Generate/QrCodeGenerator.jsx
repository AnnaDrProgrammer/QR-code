import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { GENERATE_DATA } from "../../constants";
import s from "./QRCodeGenerator.module.css";

export const QrCodeGenerator = () => {
  const [value, setValue] = useState(""); // фу-ия useState возвращает массив из 2ух элем-ов. 1ый= текущее значение в хранилище, 2ой= фун-ия, позволяющая это хранилище обновить И! еще она ПЕРЕРИСОВЫВАЕТ наш компонент
  //   console.log(array[0]);//value
  //   console.log(array[1]);//fn
  const [result, setResult] = useState("");

  const onClickHandler = () => {
    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || "[]");

    localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, value]));

    setResult(value);
    setValue("");
  };

  const onChangeHandler = (event) => {
    //эта ф-ия будет меняться каждый раз, когда мы изменяем поле ввода(те при нажатии любой кнопки на клавиатуре)
    setValue(event.target.value);
    setResult("");
  };

  console.log(result);

  return (
    <div className={s.container}>
      <input
        type="text"
        className={s.input}
        placeholder="Введите текст..."
        value={value}
        onChange={onChangeHandler}
      />
      <button className={s.button} type="button" onClick={onClickHandler}>
        Сгенерировать QR
      </button>

      {result !== "" && (
        <div className={s.qrWrapper}>
          <QRCodeSVG value={result} size={200}/>
        </div>
      )}
    </div>
  );
};
