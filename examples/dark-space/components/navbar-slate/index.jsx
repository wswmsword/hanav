import { Trans } from "react-i18next";
import styles from "./index.module.css";
import { Head, Tail, MiniTail } from "hanav";
import { forwardRef } from "react";

export default forwardRef(function NavbarSlate({ dynamicWidth, t, miniBack, ...propsFromN }, ref) {
  const contentItemStyle = {
    width: dynamicWidth ? 400 : "100%",
    flexShrink: 0,
  };
  return <div
    ref={ref}
    className={styles.wrapper}
    {...propsFromN}
    style={{ ...propsFromN.style, ...contentItemStyle }}>
    {miniBack}
    <p className={styles.navDesc}>{t("slate_navbar_desc")}</p>
    <div className={styles.feats}>
      <FeatSlate e="🍯" t={t("smooth_t")} d={t("s_nb_smooth_d")} />
      <FeatSlate e="🎹" t={t("key_t")} d={<Trans i18nKey="s_nb_key_d" t={t}>0<kbd>1</kbd>two<kbd>3</kbd>4</Trans>} />
      <FeatSlate e="♿️" t={t("a11y_t")} d={t("s_nb_a11y_d")} />
      <FeatSlate e="🎨" t={t("style_t")} d={t("s_nb_style_d")} />
    </div>
    <span className={styles.title}>{t("o")}</span>
    <ul className={styles.links}>
      <li>{miniBack ?
        <a id="n-first" href={t("s_nb_doc_t1_link")}>{t("s_nb_doc_t1")}</a> :
        <Head><a id="n-first" href={t("s_nb_doc_t1_link")}>{t("s_nb_doc_t1")}</a></Head>}</li>
      <li><a href={t("s_nb_doc_t2l")}>{t("s_nb_doc_t2")}</a></li>
      <li><a href={t("s_nb_doc_t3l")}>{t("s_nb_doc_t3")}</a></li>
      <li>{miniBack ?
        <MiniTail><a id="n-last" href={t("s_nb_doc_t4l")}>{t("s_nb_doc_t4")}</a></MiniTail> :
        <Tail><a id="n-last" href={t("s_nb_doc_t4l")}>{t("s_nb_doc_t4")}</a></Tail>}
      </li>
    </ul>
  </div>;
})

function FeatSlate({ e, t, d }) {
  return <div className={styles.feat}>
    <div className={styles.icon_wrap}>{e}</div>
    <div>
      <div className={styles.title}>{t}</div>
      <div className={styles.desc}>{d}</div>
    </div>
  </div>;
}