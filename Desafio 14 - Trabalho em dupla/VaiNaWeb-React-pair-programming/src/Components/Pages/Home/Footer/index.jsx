import React from "react";

import Instagram from '../../../../Assets/InstagramEllipse.png'
import Twitter from '../../../../Assets/Twitter-ellipse.png'
import Facebook from '../../../../Assets/FacebookEllipse.png'
import Pinterest from '../../../../Assets/PinterestEllipse.png'
import * as S from './style';

export default function FooterFunc() {
  return (
    <>
      <S.Container>
        <S.MenuLeft>
          <div>
            <img src={Instagram} alt="instagram" />
            <img src={Twitter} alt="twiter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Pinterest} alt="Pinterest" />
          </div>
        </S.MenuLeft>
        <S.MenuRight>
          <ul>
            <li>ABOUT</li>
            <li>RECIPES</li>
            <li>SUBSCRIBE</li>
          </ul>
        </S.MenuRight>
      </S.Container>

      <S.Rodape>
        <p>&copy; Projeto realizado em dupla por Charles Antunes e Adriana Gutierrez para o curso do Vai Na Web em 09/2022</p>
      </S.Rodape>
    </>
  )
}