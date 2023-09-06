import stylesPreloader from "../styles/preloader.module.css"

const Preloader = () => {
  return (
    <div className={stylesPreloader.preloader}>
      <div className={stylesPreloader.loader}></div>
    </div>
  );
};

export default Preloader;
