import '../styles/textDecoration.css';

export default function TextDecoration({ tag, text, decoration, color }) {
  const Tag = tag;

  return (
    <>
        <span className="svg-wrap">
          <svg viewBox="0 0 400 20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <path
                id="underline"
                d="m 1.986,8.91 c 55.429038,4.081 111.58111,5.822 167.11781,2.867 22.70911,-1.208 45.39828,-0.601 68.126,-0.778 28.38173,-0.223 56.76079,-1.024 85.13721,-1.33 24.17379,-0.261 48.42731,0.571 72.58115,0.571"
              ></path>
              <path
                id="highlight"
                d="m 3.518915,27.827324 c 55.429038,4.081 111.581115,5.822 167.117815,2.867 22.70911,-1.208 45.39827,-0.601 68.126,-0.778 28.38172,-0.223 56.76078,-1.024 85.13721,-1.33 24.17378,-0.261 48.4273,0.571 72.58114,0.571"
              ></path>
            </defs>
          </svg>
        </span>
        <section>
          <Tag id='decorated-text'>
          &nbsp;{text}&nbsp;
            <svg className={decoration} style={{stroke: `${color}`}}>
              <use href={`#${decoration}`}></use>
            </svg>
          </Tag>
        </section>
    </>
  );
}
