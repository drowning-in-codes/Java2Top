import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Java 八股文',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        提供全面的 Java 面试八股文，包括 Java 基础、JVM、并发编程、Spring 等核心知识点，帮助你轻松应对面试。
      </>
    ),
  },
  {
    title: '场景题解析',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        深入解析各种 Java 面试场景题，包括系统设计、分布式系统、海量数据处理等，提升你的实际问题解决能力。
      </>
    ),
  },
  {
    title: '学习导航',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        提供详细的 Java 学习路径和资源推荐，帮助你系统性地学习 Java 技术栈，快速成长为 Java 工程师。
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
