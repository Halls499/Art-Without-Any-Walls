import "./style.css";

function Kat() {
  return (
    <main>
      <h1>
        <b>Olá, meu nome é <span>Katz</span></b>
      </h1>

      <div className="content">
        <p>
          <b>
            Sou uma artista apaixonada por criar experiências visuais únicas.
            Meu trabalho combina cores vibrantes, formas abstratas e elementos
            interativos para envolver o público de maneira cativante.
          </b>
        </p>

        <p>
          <b>
            Acredito que a arte tem o poder de transformar espaços e provocar
            emoções. Cada projeto que realizo é uma oportunidade de explorar
            novas ideias e desafiar os limites da criatividade.
          </b>
        </p>

        <p>
          <b>
            Se você está procurando uma artista que traga inovação e
            originalidade para seus projetos, estou pronta para colaborar e
            criar algo extraordinário juntos.
          </b>
        </p>
      </div>

      <div className="pae">
        <div className="obras">
          <a href="/katz/obra1">
            <div className="obra">
              <img src="/img/obra 1.jpeg" alt="Obra 1" />
              <p>Obra 1 - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra2">
            <div className="obra">
              <img src="/img/obra 2.jpeg" alt="Obra 2" />
              <p>Obra 2 - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra3">
            <div className="obra">
              <img src="/img/obra 3.jpeg" alt="Obra 3" />
              <p>Dead Nature - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra4">
            <div className="obra">
              <img src="/img/obra 4.jpeg" alt="Obra 4" />
              <p>Vivi Aurum - R$50,00</p>
            </div>
          </a>
        </div>

        <div className="obras">
          <a href="/katz/obra5">
            <div className="obra">
              <img src="/img/obra 5.jpeg" alt="Obra 5" />
              <p>Obra 5 - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra6">
            <div className="obra">
              <img src="/img/obra 6.jpeg" alt="Obra 6" />
              <p>Lost Heaven - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra7">
            <div className="obra">
              <img src="/img/obra 7.jpeg" alt="Obra 7" />
              <p>Obra 7 - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra8">
            <div className="obra">
              <img src="/img/obra 8.jpeg" alt="Obra 8" />
              <p>Obra 8 - R$50,00</p>
            </div>
          </a>
        </div>

        <div className="obras">
          <a href="/katz/obra9">
            <div className="obra">
              <img src="/img/obra 9.jpeg" alt="Obra 9" />
              <p>Vivi Aurum - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra10">
            <div className="obra">
              <img src="/img/obra 10.jpeg" alt="Obra 10" />
              <p>Obra 10 - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra11">
            <div className="obra">
              <img src="/img/obra 11.jpeg" alt="Obra 11" />
              <p>Obra 11 - R$50,00</p>
            </div>
          </a>

          <a href="/katz/obra12">
            <div className="obra">
              <img src="/img/obra 12.jpeg" alt="Obra 12" />
              <p>Gloow - R$50,00</p>
            </div>
          </a>
        </div>
      </div>

      <div className="buttons-container">
        <button className="btn-artista">
          Contratar Artista
        </button>
      </div>
    </main>
  );
}

export default Kat;