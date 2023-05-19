import React from "react";
import Bolo from "../../../../Assets/RedVelvetCake.png"
import Pizza from "../../../../Assets/MargheritaPizza.png"
import Vitamina from "../../../../Assets/PeanutSmoothie.png"
import Colher from "../../../../Assets/ColherComSalGrosso.png"
import * as S from './style'

export default function MainFunc() {
  return (
    <S.ContainerGeral>
      <S.Top>
        <S.ContainerTitle>
          <h1>Latest Recipes</h1>
          <div></div>
        </S.ContainerTitle>

        <S.ContainerReceitas>
          <S.Bolo>
            <img src={Bolo} alt="Foto Velvet Cake" />
            <div></div>
            <p>Red Velvet Cake</p>
          </S.Bolo>

          <S.Pizza>
            <img src={Pizza} alt="Foto fatia de pizza" />
            <div></div>
            <p>Margherita Pizza</p>
          </S.Pizza>

          <S.Smoothie>
            <img src={Vitamina} alt="Foto do Smoothie de Amendoin" />
            <div></div>
            <p>Peanut Smoothie</p>
          </S.Smoothie>
        </S.ContainerReceitas>
      </S.Top>

      <S.Mid>
        <img src={Colher} alt="Foto de uma colher com sal grosso" />
        <S.ContainerAbout>
          <h1>About</h1>
          <div></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt,
            tortor nec rhoncus dictum, lorem massa tempus sem, eu tincidunt libero velit
            sit amet velit. Nunc in euismod urna. Duis dapibus, elit eu eleifend tincidunt,
            nulla ipsum consectetur lorem, quis tempor lorem justo quis nisi. Nam interdum,
            nisi nec mollis sagittis, enim risus euismod nisi, quis rutrum quam augue id mauris.
            Pellentesque mattis hendrerit semper. Orci varius natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Ut vestibulum nisl ante, et ultricies
            sapien facilisis aliquam.</p>
        </S.ContainerAbout>
      </S.Mid>

      <S.Bot>
        <h1>Subscribe</h1>
        <h2>Sign up for newsletter</h2>
        <input placeholder="Your Email"/>
        <div>Submit</div>
      </S.Bot>
    </S.ContainerGeral>
  )
}