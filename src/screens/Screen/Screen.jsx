import React from "react";
import { Frame } from "../../components/Frame";
import { Header } from "../../components/Header";
import { PropertyDefaultWrapper } from "../../components/PropertyDefaultWrapper";
import "./style.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="div-3">
        <div className="frame-2">
          <div className="frame-3">
            <Frame frameClassName="frame-48355" property1="default" />
            <Frame property1="default" />
          </div>
          <div className="frame-3">
            <Frame property1="default" />
            <Frame property1="default" />
          </div>
          <div className="frame-3">
            <Frame property1="default" />
            <Frame property1="default" />
          </div>
          <div className="frame-3">
            <Frame property1="default" />
            <Frame property1="default" />
          </div>
        </div>
        <div className="frame-4">
          <Header className="header-instance" property1="variant-3" />
          <div className="overlap-group">
            <div className="group-2">
              <div className="text-wrapper-4">Алтан ташуур ресторан</div>
              <div className="tashuur-wrapper">
                <img className="tashuur" alt="Tashuur" src="https://c.animaapp.com/kYIVtpEG/img/tashuur@2x.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="frame-5">
          <PropertyDefaultWrapper
          className="frame-48342"
          divClassName="frame-instance"
          property1="default" text="Зууш" />
          <PropertyDefaultWrapper
            className="frame-48342-instance"
            divClassName="frame-instance"
            property1="variant-2"
            text="Бууз"
          />
          <PropertyDefaultWrapper
            className="design-component-instance-node"
            divClassName="frame-instance"
            property1="variant-2"
            text="Хуушуур"
          />
          <PropertyDefaultWrapper
            className="frame-6"
            divClassName="frame-instance"
            property1="variant-2"
            text="Сэт хоол"
          />
          <PropertyDefaultWrapper className="frame-7" divClassName="frame-instance" property1="variant-2" text="Шөл" />
          <PropertyDefaultWrapper
            className="frame-48342"
            divClassName="frame-instance"
            property1="variant-2"
            text="Архи"
          />
        </div>
      </div>
    </div>
  );
};
