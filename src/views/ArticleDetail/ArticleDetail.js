import useStyles from './style';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';

/**
 * Page to render detail article news.
 */
const ArticleDetail = () => {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <main className={classes.main}>
        <section className={classes.intro}>
          <article>
            <span className={classes.date}>FRI 12 JUN 2020 06.40 bst</span>
            <h1 className={classes.title}>Global report: WHO warns of accelerating Covid-19 infections in Africa</h1>
            <h2 className={classes.description}>
              Continent is seeing more cases spread to the proviences; <br />
              Trump supporters can't sure over catching Covid-19 at rallies; <br />
              Brazil confirm 30,000 new cases
            </h2>
          </article>
        </section>
        {/* end of top section  */}
        <div className={classes.gridView}>
          <section className={classes.newsSection}>
            <article>
              <p className={classes.newsDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. At lectus urna duis
                convallis convallis tellus id. Enim lobortis scelerisque fermentum dui faucibus in ornare. Id porta nibh
                venenatis cras. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Sit amet aliquam id diam
                maecenas ultricies. Senectus et netus et malesuada fames ac turpis. Lobortis scelerisque fermentum dui
                faucibus in ornare quam viverra orci. Maecenas pharetra convallis posuere morbi leo urna molestie at.
                Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Malesuada bibendum arcu vitae
                elementum curabitur vitae nunc. Turpis egestas sed tempus urna et pharetra pharetra massa massa. Mattis
                pellentesque id nibh tortor id aliquet lectus. Tincidunt ornare massa eget egestas purus viverra
                accumsan in nisl. Felis eget nunc lobortis mattis aliquam faucibus purus in massa. Pulvinar pellentesque
                habitant morbi tristique senectus et netus et. Orci porta non pulvinar neque laoreet. In nulla posuere
                sollicitudin aliquam ultrices sagittis. Consequat nisl vel pretium lectus quam id leo in. Pretium quam
                vulputate dignissim suspendisse in. Convallis aenean et tortor at risus viverra adipiscing at in.
                Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Aliquet sagittis id consectetur
                purus. Velit ut tortor pretium viverra suspendisse. Condimentum id venenatis a condimentum vitae sapien.
                In hac habitasse platea dictumst vestibulum rhoncus est. Nunc congue nisi vitae suscipit tellus mauris
                a. Posuere urna nec tincidunt praesent semper. Justo laoreet sit amet cursus sit. Id leo in vitae
                turpis. Sodales ut eu sem integer vitae. Neque aliquam vestibulum morbi blandit. Euismod nisi porta
                lorem mollis aliquam. Cursus sit amet dictum sit amet justo donec enim. Porttitor rhoncus dolor purus
                non enim praesent. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Viverra
                aliquet eget sit amet tellus cras adipiscing. Eget duis at tellus at urna condimentum mattis
                pellentesque id. Metus aliquam eleifend mi in nulla. Est ullamcorper eget nulla facilisi etiam dignissim
                diam quis. Lacus sed viverra tellus in hac habitasse platea dictumst vestibulum. Malesuada proin libero
                nunc consequat interdum varius sit. Nec ullamcorper sit amet risus nullam. Ornare suspendisse sed nisi
                lacus sed viverra tellus in. Platea dictumst vestibulum rhoncus est. Arcu cursus vitae congue mauris
                rhoncus aenean. Fermentum posuere urna nec tincidunt praesent. Odio tempor orci dapibus ultrices in
                iaculis nunc sed. Risus ultricies tristique nulla aliquet. A lacus vestibulum sed arcu non odio. Sed
                vulputate odio ut enim blandit. Egestas erat imperdiet sed euismod nisi porta. Pretium quam vulputate
                dignissim suspendisse in est ante. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.
                Proin sagittis nisl rhoncus mattis rhoncus. Cum sociis natoque penatibus et magnis. Dictum sit amet
                justo donec enim diam. Tincidunt lobortis feugiat vivamus at augue eget arcu. Nunc sed augue lacus
                viverra vitae. Ac turpis egestas sed tempus urna et. Gravida in fermentum et sollicitudin ac. Nascetur
                ridiculus mus mauris vitae. Semper eget duis at tellus at. Pretium aenean pharetra magna ac. Amet dictum
                sit amet justo donec enim diam vulputate ut. Auctor neque vitae tempus quam pellentesque nec nam
                aliquam. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Phasellus vestibulum
                lorem sed risus ultricies tristique. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Eu
                augue ut lectus arcu bibendum at varius vel pharetra. In metus vulputate eu scelerisque. Nisl nisi
                scelerisque eu ultrices vitae auctor eu. Sed euismod nisi porta lorem mollis aliquam ut. Risus nec
                feugiat in fermentum posuere urna.
              </p>
            </article>
          </section>
          <aside className={classes.asideImage}>
            <figure>
              <img className={classes.thumbnail} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg" />
              <figcaption className={classes.caption}>
                Proin sagittis nisl rhoncus mattis rhoncus. Cum sociis natoque penatibus et magnis. Dictum sit amet
                justo donec enim diam. Tincidunt lobortis feugiat vivamus at augue eget arcu. Nunc sed augue lacus
                viverra vitae.
              </figcaption>
            </figure>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
};

export { ArticleDetail };
