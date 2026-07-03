import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  MessageCircle,
  PanelsTopLeft,
  Sparkles,
  Star,
} from "lucide-react";
import heroCard03 from "./assets/hero-card-03.png";
import heroCard04 from "./assets/hero-card-04.png";
import project01 from "./assets/project-01.png";
import project02 from "./assets/project-02.png";
import project03 from "./assets/project-03.png";
import project04 from "./assets/project-04.png";
import project05 from "./assets/project-05.png";
import appProject01 from "./assets/app-project-01.png";
import appProject02 from "./assets/app-project-02.png";
import appProject03 from "./assets/app-project-03.png";
import appProject04 from "./assets/app-project-04.png";
import appProject05 from "./assets/app-project-05.png";
import fe1Picture from "./assets/fe1-picture.png";
import fe2Picture from "./assets/fe2-picture.png";
import pmPicture from "./assets/pm-picture.png";
import uiPicture from "./assets/ui-picture.png";
import articleIcon from "./assets/article_icon.svg";
import projectIcon from "./assets/project_icon.svg";
import schoolIcon from "./assets/school_icon.svg";
import yearIcon from "./assets/year_icon.svg";
import wechatQr from "./assets/wechat.png";

const COS_BASE_URL =
  "https://resume-projects-1329527832.cos.ap-guangzhou.myqcloud.com";
const RESUME_PDF_URL =
  "https://resume-projects-1329527832.cos.ap-guangzhou.myqcloud.com/resume/%E5%90%B4%E6%96%87%E8%B1%AAui%E8%AE%BE%E8%AE%A1%E7%AE%80%E5%8E%86.pdf";
const DEFAULT_PROJECT_IMAGE_EXTENSION = "webp";
const DEFAULT_PROJECT_IMAGE_PREFIX = "page";
const DEFAULT_PROJECT_IMAGE_NUMBER_LENGTH = 2;
const TYPEWRITER_TEXTS = ["吴文豪", "欢迎来到我的个人网站🥰"];
const TYPEWRITER_CONFIG = {
  typeSpeed: 100,
  deleteSpeed: 50,
  stayTime: 2000,
  startDelay: 500,
};

const profile = {
  name: "吴文豪",
  title: "UI 设计师",
  tagline: "把复杂产品体验，整理成清晰、有温度、可落地的界面系统。",
  location: "深圳 / 郑州 / 杭州",
  salary: "全栈设计师",
  years: "6 年经验",
  education: "本科",
  phone: "18565879526",
  wechat: "designW66",
};

const jobs = [
  {
    company: "深圳市塔比尔信息技术有限公司",
    date: "2023.08 至今",
    timeline: "2023.08",
    startDate: "2023年8月1日",
    endDate: "至今",
    role: "UI设计师 / 产品部",
    summary:
      "负责公司社交 APP 产品整体 UI 设计与用户体验，配合开发标记切图，走查页面并保证产品上线效果。",
    responsibilities: [
      "根据产品需求, 负责公司社交APP产品整体的UI设计与用户体验，配合开发标记切图走查页面，保证产品上线效果。 ",
      "负责马甲、壳包的制作，配合市场修改上架图，根据用户反馈，持续优化界面设计，更新和维护设计系统，确保设计的一致性和可扩展性。",
      "协同开发完成 iOS 应用提审，针对审核反馈优化界面、图标、截图及视觉素材，快速解决上架被拒问题；熟悉 App Store 审核规范，从 UI 设计层面规避上架风险，保障版本按时上线。",
    ],
    tags: ["动效设计", "UI设计", "UE设计", "设计师"],
  },
  {
    company: "深圳市中科云览计算机技术有限公司",
    date: "2022.09-2023.08",
    timeline: "2022.09",
    startDate: "2022年9月1日",
    endDate: "2023年8月31日",
    role: "UI设计师",
    summary:
      "负责 Web、APP、小程序整体 UI 与用户体验设计，配合开发还原线上效果，持续提升产品易用性与视觉一致性。",
    responsibilities: [
      "根据产品需求, 负责公司产品(Web/APP/小程序)整体UI设计与用户 体验，配合开发，还原线上效果，提高产品对用户体验设计",
      "负责公司公众号运营。宣传视频、PTT制作等一些宣传物料的工作。",
      "参与开发联调与上线验收，持续优化产品易用性和页面完成度。",
    ],
    tags: ["动效设计", "设计师", "UE设计", "UI设计"],
  },
  {
    company: "康卫科技（北京）股份有限公司",
    date: "2020.08-2022.07",
    timeline: "2020.08",
    startDate: "2020年8月1日",
    endDate: "2022年7月31日",
    role: "UI设计师 / 产品部",
    summary:
      "参与创新在线多人语音配音秀软件设计，围绕娱乐化配音互动、用户表达与内容消费完成多轮视觉方案。",
    responsibilities: [
      "戏鲸是一款创新的在线多人语音配音秀软件，用户可以通过手机寻找小伙伴一起实况进行带有娱乐性的配音表演，并通过这种方式进行娱乐自己，交到朋友。戏鲸App致力于娱乐领域原创内容及二创内容制作及分享的社区，用声线展示自己，用声音与观众互动",
      "负责移动端产品的界面设计，完成产品视觉升级，以及日常版本迭代更新，负责部分运营活动设计，如H5营销和海报、banner等。",
      "协助研发团队完成产品的视觉风格创建，保证高质量输出，制定设计界面的风格及标准，包括界面控件、界面图标、交互设计等。",
    ],
    tags: ["动效设计", "设计师", "UI设计"],
  },
];

const projects = [
  {
    title: "社交 App 0-1 体验设计",
    slug: "social-app",
    tone: "cyan",
    image: project01,
    mobileImage: appProject01,
    detailFolder: "pengqiao-projects",
    detailCount: 6,
    gifIndexes: [4],
  },
  {
    title: "Web / APP / 小程序多端设计",
    slug: "multi-platform",
    tone: "lime",
    image: project02,
    mobileImage: appProject02,
    detailFolder: "tx-projects",
    detailCount: 15,
    gifIndexes: [5, 6, 8, 11],
  },
  {
    title: "语音配音秀产品体验",
    slug: "voice-dubbing",
    tone: "rose",
    image: project03,
    mobileImage: appProject03,
    detailFolder: "total-projects",
    detailCount: 47,
    gifIndexes: [1, 2, 8, 9, 11, 14, 22, 26, 27, 28, 29, 37, 39],
  },
  {
    title: "后台与运营工具设计",
    slug: "admin-tools",
    tone: "violet",
    image: project04,
    mobileImage: appProject04,
    detailFolder: "taqu-projects",
    detailCount: 19,
    gifIndexes: [],
  },
  {
    title: "设计交付与上线验收",
    slug: "design-delivery",
    tone: "amber",
    image: project05,
    mobileImage: appProject05,
    detailFolder: "zap-projects",
    detailCount: 7,
    gifIndexes: [],
  },
];

const introParagraphs = [
  "目前是一名UI设计师，渴望成为一名全栈设计师。具备4年以上UI设计工作经验 ，承担多平台项目 ，设计创新并融合现有规 范对多方案产出能力且具有方法论对支撑，紧跟设计趋势，具沉淀能力。 我对技术的无限可能性充满热情，也专注于探索产品设计价值观，寻求极致设计、交互、科技之间的平衡包容性和业务理解来解决问题。",
  "擅长从业务目标出发，完成信息架构、交互逻辑、体系、动效表达、后台配置与数据复盘，在体验质量与转化结果之间找到更稳定的设计解法。"
];

const introStats = [
  { value: "6", label: "工作年限", icon: yearIcon },
  { value: "10+", label: "完整项目", icon: projectIcon },
  { value: "30+", label: "技术文章", icon: articleIcon },
  { value: profile.education, label: "学历", icon: schoolIcon },
];

const peerReviews = [
  {
    name: "何塘兵",
    role: "产品经理",
    tone: "pm",
    avatar: pmPicture,
    meta: "10+年经验 / 产品部 / 深圳达疆互联有限公司",
    quote:
      "文豪对需求理解很快，能把复杂业务拆成清晰的页面路径。合作时沟通效率高，方案推进稳定，经常能在产品目标和用户体验之间找到更平衡的解法。",
  },
  {
    name: "范博渊",
    role: "UI设计",
    tone: "ui",
    avatar: uiPicture,
    meta: "6年经验 / 产品部 / 深圳达疆互联有限公司",
    quote:
      "他的视觉判断和组件意识很强，既能关注界面的情绪表达，也会考虑后续复用和交付规范。一起做版本迭代时，细节走查非常靠谱。",
  },
  {
    name: "郭梦飞",
    role: "前端开发",
    tone: "fe",
    avatar: fe1Picture,
    meta: "7年经验 / 前端开发 / 深圳达疆互联有限公司",
    quote:
      "设计稿结构清楚，标注、状态和边界场景都给得很完整。联调过程中响应很快，能理解实现成本，也愿意一起把体验打磨到线上可用。",
  },
  {
    name: "姚达",
    role: "前端开发",
    tone: "fe",
    avatar: fe2Picture,
    meta: "5年经验 / 前端开发 / 深圳达疆互联有限公司",
    quote:
      "和文豪合作很省心，页面层级、交互反馈和适配方案都比较明确。遇到实现细节时，他会给出可落地的替代方案，不会只停留在视觉效果上。",
  },
];

const navItems = [
  ["overview", "概览"],
  ["about", "介绍"],
  ["projects", "项目"],
  ["experience", "经历"],
  ["education", "评价"],
];

function handleSpotlightMove(event) {
  event.currentTarget.querySelectorAll(".about-stat-card").forEach((card) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`);
  });
}

function handleHeroCardTilt(event) {
  const card = event.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;

  card.style.setProperty("--tilt-x", `${(x * 24).toFixed(2)}deg`);
  card.style.setProperty("--tilt-y", `${(-y * 24).toFixed(2)}deg`);
}

function resetHeroCardTilt(event) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
}

function useScrollReveal() {
  useEffect(() => {
    const sections = document.querySelectorAll(".reveal-section");

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      {
        rootMargin: "-8% 0px -12% 0px",
        threshold: 0.18,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);
}

function useCurrentHash() {
  const [hash, setHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return hash;
}

function useTypewriter(texts, config) {
  const [displayText, setDisplayText] = useState("");
  const [isDeletingText, setIsDeletingText] = useState(false);

  useEffect(() => {
    let timeout;
    let currentTextIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    const runTypewriter = () => {
      const currentText = texts[currentTextIndex] ?? "";
      const currentChars = Array.from(currentText);

      if (!isDeleting) {
        currentCharIndex += 1;
        setDisplayText(currentChars.slice(0, currentCharIndex).join(""));
        setIsDeletingText(false);

        if (currentCharIndex === currentChars.length) {
          timeout = window.setTimeout(() => {
            isDeleting = true;
            runTypewriter();
          }, config.stayTime);
          return;
        }
      } else {
        currentCharIndex -= 1;
        setDisplayText(currentChars.slice(0, currentCharIndex).join(""));
        setIsDeletingText(true);

        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % texts.length;
        }
      }

      timeout = window.setTimeout(
        runTypewriter,
        isDeleting ? config.deleteSpeed : config.typeSpeed,
      );
    };

    timeout = window.setTimeout(runTypewriter, config.startDelay);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [config.deleteSpeed, config.startDelay, config.stayTime, config.typeSpeed, texts]);

  return { displayText, isDeleting: isDeletingText };
}

function useHashScroll(hash, enabled) {
  useEffect(() => {
    if (!enabled || !hash || hash.startsWith("#project/")) {
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      target?.scrollIntoView({ block: "start" });
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [hash, enabled]);
}

function getProjectDetailImages(project) {
  if (!COS_BASE_URL || project.detailCount <= 0) {
    return [];
  }

  return Array.from({ length: project.detailCount }, (_, index) => {
    const imageIndex = index + 1;
    const imagePrefix = project.detailImagePrefix ?? DEFAULT_PROJECT_IMAGE_PREFIX;
    const imageNumberLength =
      project.detailImageNumberLength ?? DEFAULT_PROJECT_IMAGE_NUMBER_LENGTH;
    const imageNumber = String(imageIndex).padStart(imageNumberLength, "0");
    const extension = project.gifIndexes.includes(imageIndex)
      ? "gif"
      : DEFAULT_PROJECT_IMAGE_EXTENSION;

    return `${COS_BASE_URL}/${project.detailFolder}/${imagePrefix}-${imageNumber}.${extension}`;
  });
}

function useProjectDetailGuards() {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      const isDeveloperShortcut =
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(key)) ||
        (event.metaKey && event.altKey && ["i", "j", "c"].includes(key));
      const isSaveOrSourceShortcut =
        (event.ctrlKey || event.metaKey) && ["s", "u"].includes(key);

      if (isDeveloperShortcut || isSaveOrSourceShortcut) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, []);
}

function ProjectDetailPage({ project }) {
  const detailImages = getProjectDetailImages(project);
  useProjectDetailGuards();

  return (
    <main
      className="project-detail-shell"
      onContextMenu={(event) => event.preventDefault()}
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="project-marquee" aria-label="作品加载提示">
        <div className="project-marquee-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span key={index}>
              作品集内动画较多，首次加载会稍慢一些，感谢您的耐心等待～
            </span>
          ))}
        </div>
      </div>
      <header className="project-detail-header">
        <a className="back-link" href="#projects">
          <ArrowLeft size={18} />
          返回项目
        </a>
        <span>吴文豪作品集</span>
      </header>

      <section className="project-image-stack" aria-label={`${project.title}作品图片`}>
        {detailImages.length > 0 ? (
          detailImages.map((imageUrl, index) => (
            <img
              src={imageUrl}
              alt={`${project.title}作品图 ${index + 1}`}
              loading={index === 0 ? "eager" : "lazy"}
              draggable="false"
              key={imageUrl}
            />
          ))
        ) : (
          <div className="project-empty-state">
            <p>作品图片待配置</p>
          </div>
        )}
      </section>
    </main>
  );
}

export function App() {
  const currentHash = useCurrentHash();
  const activeProjectSlug = currentHash.replace("#project/", "");
  const activeProject = projects.find((project) => project.slug === activeProjectSlug);
  const typewriter = useTypewriter(TYPEWRITER_TEXTS, TYPEWRITER_CONFIG);
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  const [isHeaderElevated, setIsHeaderElevated] = useState(false);
  const activeReview = peerReviews[activeReviewIndex];

  useScrollReveal();
  useHashScroll(currentHash, !activeProject);

  useEffect(() => {
    if (activeProject) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveReviewIndex((currentIndex) => (currentIndex + 1) % peerReviews.length);
    }, 4000);

    return () => {
      window.clearInterval(interval);
    };
  }, [activeProject]);

  useEffect(() => {
    if (activeProject) {
      return undefined;
    }

    const updateHeaderState = () => {
      setIsHeaderElevated(window.scrollY > 12);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateHeaderState);
    };
  }, [activeProject]);

  if (activeProject) {
    return <ProjectDetailPage project={activeProject} />;
  }

  return (
    <main className="resume-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header
        className={`site-header ${isHeaderElevated ? "is-elevated" : ""}`}
        aria-label="页面导航"
      >
        <a className="brand" href="#overview" aria-label="回到首页">
          <span className="brand-mark">
            <Star size={18} fill="currentColor" />
          </span>
          <span>UI Portfolio</span>
        </a>
        <nav className="nav-pill" aria-label="简历章节">
          {navItems.map(([href, label]) => (
            <a key={href} href={`#${href}`}>
              {label}
            </a>
          ))}
        </nav>
        <div className="wechat-popover-wrap header-contact-wrap">
          <button
            className="contact-link"
            type="button"
            aria-describedby="header-wechat-popover"
          >
            <Mail size={16} />
            联系
          </button>
          <div className="wechat-popover" id="header-wechat-popover" role="tooltip">
            <img src={wechatQr} alt="微信二维码" loading="lazy" />
            <p>扫一扫，添加我为朋友</p>
          </div>
        </div>
      </header>

      <section className="hero reveal-section is-visible" id="overview">
        <div className="hero-copy">
          <p className="hero-kicker">
            <Sparkles size={16} />
            Full-STACK DESIGNER
          </p>
          <h1 className="hero-typewriter-line">
            <span>{typewriter.displayText}</span>
            <span
              className={`typewriter-cursor ${typewriter.isDeleting ? "cursor-hidden" : ""
                }`}
              aria-hidden="true"
            />
          </h1>
          <p className="hero-tagline">{profile.tagline}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              查看项目
              <ArrowUpRight size={18} />
            </a>
            <a
              className="ghost-button"
              href={RESUME_PDF_URL}
              download="吴文豪ui设计简历.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />
              下载简历
            </a>
          </div>
        </div>

        <div className="hero-float-layer" aria-hidden="true">
          <div
            className="hero-info-card hero-info-card-3"
            onPointerLeave={resetHeroCardTilt}
            onPointerMove={handleHeroCardTilt}
          >
            <img src={heroCard04} alt="" draggable="false" />
          </div>
          <div
            className="hero-info-card hero-info-card-4"
            onPointerLeave={resetHeroCardTilt}
            onPointerMove={handleHeroCardTilt}
          >
            <img src={heroCard03} alt="" draggable="false" />
          </div>
        </div>
      </section>

      <section className="about-section reveal-section" id="about">
        <div className="section-title">
          <Sparkles size={20} />
          <div>
            <span>About</span>
            <h2>介绍</h2>
          </div>
        </div>
        <div className="about-copy">
          {introParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div
          className="about-stat-row"
          aria-label="个人概览数据"
          onPointerMove={handleSpotlightMove}
        >
          {introStats.map((stat) => (
            <article className="about-stat-card" key={stat.label}>
              <img className="about-stat-icon" src={stat.icon} alt="" aria-hidden="true" />
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="project-showcase reveal-section" id="projects">
        <div className="section-title">
          <PanelsTopLeft size={20} />
          <div>
            <span>Project Work</span>
            <h2>项目经历</h2>
          </div>
        </div>
        <div className="project-card-row" aria-label="项目经历卡片">
          {projects.map((project) => (
            <a
              className={`project-card project-card-${project.tone}`}
              href={`#project/${project.slug}`}
              key={project.title}
              aria-label={`打开项目：${project.title}`}
            >
              <picture>
                <source media="(max-width: 760px)" srcSet={project.mobileImage} />
                <img src={project.image} alt={project.title} loading="lazy" />
              </picture>
            </a>
          ))}
        </div>
      </section>

      <section className="timeline-section reveal-section" id="experience">
        <div className="section-title">
          <Building2 size={20} />
          <div>
            <span>Experience</span>
            <h2>工作经历</h2>
          </div>
        </div>
        <div className="experience-list">
          {jobs.map((job) => (
            <article className="experience-item" key={job.company}>
              <div className="experience-marker" aria-hidden="true">
                <span />
              </div>
              <div className="experience-content">
                <div className="experience-heading">
                  <div>
                    <h3>{job.company}</h3>
                    <strong>{job.role}</strong>
                  </div>
                  <time>
                    {job.startDate} - {job.endDate}
                  </time>
                </div>
                <ul className="experience-points">
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="peer-review-section reveal-section" id="education">
        <div className="peer-review-header">
          <div className="section-title">
            <MessageCircle size={20} />
            <div>
              <span>Peer Review</span>
              <h2>同事评价</h2>
            </div>
          </div>
          <div className="review-arrow-group">
            <button
              type="button"
              aria-label="上一条评价"
              onClick={() =>
                setActiveReviewIndex(
                  (activeReviewIndex - 1 + peerReviews.length) % peerReviews.length,
                )
              }
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="下一条评价"
              onClick={() =>
                setActiveReviewIndex((activeReviewIndex + 1) % peerReviews.length)
              }
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        <article className="peer-review-card" aria-live="polite" key={activeReview.name}>
          <img
            className="peer-avatar"
            src={activeReview.avatar}
            alt={`${activeReview.name}头像`}
          />
          <div className="peer-review-content">
            <div className="peer-review-name-row">
              <h3>{activeReview.name}</h3>
              <span className={`peer-role peer-role-${activeReview.tone}`}>
                {activeReview.role}
              </span>
            </div>
            <p className="peer-meta">{activeReview.meta}</p>
            <p className="peer-quote">{activeReview.quote}</p>
          </div>
        </article>
        <div className="review-dot-row" aria-label="切换同事评价">
          {peerReviews.map((review, index) => (
            <button
              className={index === activeReviewIndex ? "is-active" : ""}
              type="button"
              aria-label={`查看${review.name}的评价`}
              aria-current={index === activeReviewIndex ? "true" : undefined}
              key={review.name}
              onClick={() => setActiveReviewIndex(index)}
            >
              <span />
            </button>
          ))}
        </div>
      </section>

      <footer className="footer-panel reveal-section">
        <div>
          <span>联系方式</span>
          <p>{profile.phone}</p>
          <p>{profile.wechat}</p>
        </div>
        <div className="wechat-popover-wrap">
          <a href="mailto:hello@example.com" aria-describedby="wechat-popover">
            <MessageCircle size={18} />
            预约沟通
          </a>
          <div className="wechat-popover" id="wechat-popover" role="tooltip">
            <img src={wechatQr} alt="微信二维码" loading="lazy" />
            <p>扫一扫，添加我为朋友</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
