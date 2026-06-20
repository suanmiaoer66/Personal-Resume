import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  CircleUserRound,
  Download,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Moon,
  PanelsTopLeft,
  Sparkles,
  Star,
} from "lucide-react";
import avatar from "./assets/wuwenhao-avatar.png";

const profile = {
  name: "吴文豪",
  title: "UI 设计师",
  tagline: "把复杂产品体验，整理成清晰、有温度、可落地的界面系统。",
  location: "深圳 / 郑州 / 杭州",
  salary: "14-16K",
  years: "6 年经验",
  education: "本科",
  phone: "185 ****** 26",
  wechat: "des****66",
};

const strengths = [
  "4年以上互联网产品设计经验，主导完成3款社交 App 从0到1设计落地。",
  "能独立完成需求分析、用户体验梳理、低保真到高保真视觉输出。",
  "熟悉 Web / App / 小程序多端设计，擅长配合开发标注切图与上线验收。",
];

const jobs = [
  {
    company: "深圳市塔比尔信息技术有限公司",
    date: "2023.08 至今",
    role: "UI设计师",
    summary:
      "负责公司社交 APP 产品整体 UI 设计与用户体验，配合开发标记切图，走查页面并保证产品上线效果。",
    tags: ["动效设计", "UI设计", "UE设计", "设计师"],
  },
  {
    company: "深圳市中科云览计算机技术有限公司",
    date: "2022.09-2023.08",
    role: "UI设计师",
    summary:
      "负责 Web、APP、小程序整体 UI 与用户体验设计，配合开发还原线上效果，持续提升产品易用性与视觉一致性。",
    tags: ["动效设计", "设计师", "UE设计", "UI设计"],
  },
  {
    company: "康卫科技（北京）股份有限公司",
    date: "2020.08-2022.07",
    role: "UI设计师 / 产品部",
    summary:
      "参与创新在线多人语音配音秀软件设计，围绕娱乐化配音互动、用户表达与内容消费完成多轮视觉方案。",
    tags: ["动效设计", "设计师", "UI设计"],
  },
];

const projects = [
  {
    title: "社交 App 0-1 体验设计",
    detail: "从需求拆解、信息架构、核心流程、视觉规范到开发交付，建立可复用的社交产品设计资产。",
  },
  {
    title: "Web / APP / 小程序多端设计",
    detail: "统一品牌视觉、组件状态和响应式规则，让多端页面在效率与一致性之间保持平衡。",
  },
];

const navItems = [
  ["overview", "概览"],
  ["advantage", "优势"],
  ["experience", "经历"],
  ["projects", "项目"],
  ["education", "教育"],
];

function handleResumeDownload() {
  const content = [
    `${profile.name} - ${profile.title}`,
    `${profile.years} / ${profile.education}`,
    `求职期望: ${profile.title} ${profile.salary} ${profile.location}`,
    "",
    "个人优势",
    ...strengths.map((item) => `- ${item}`),
    "",
    "工作经历",
    ...jobs.map(
      (job) => `- ${job.company} (${job.date}) ${job.role}: ${job.summary}`,
    ),
  ].join("\n");

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "wuwenhao-resume.txt";
  link.click();
  URL.revokeObjectURL(url);
}

export function App() {
  return (
    <main className="resume-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header" aria-label="页面导航">
        <a className="brand" href="#overview" aria-label="回到首页">
          <span className="brand-mark">
            <Star size={18} fill="currentColor" />
          </span>
          <span>WWH</span>
        </a>
        <nav className="nav-pill" aria-label="简历章节">
          {navItems.map(([href, label]) => (
            <a key={href} href={`#${href}`}>
              {label}
            </a>
          ))}
        </nav>
        <a className="contact-link" href="mailto:hello@example.com">
          <Mail size={16} />
          联系
        </a>
      </header>

      <section className="hero" id="overview">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            Available for UI Design
          </div>
          <h1>
            吴文豪
            <span>
              沉浸式产品体验
              <br />
              设计师
            </span>
          </h1>
          <p>{profile.tagline}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#experience">
              查看经历
              <ArrowUpRight size={18} />
            </a>
            <button className="ghost-button" type="button" onClick={handleResumeDownload}>
              <Download size={18} />
              下载简历
            </button>
          </div>
        </div>

        <aside className="profile-stage" aria-label="候选人概览卡">
          <div className="orbit-card orbit-left">
            <MapPin size={18} />
            <span>{profile.location}</span>
          </div>
          <div className="orbit-card orbit-right">
            <Moon size={18} />
            <span>Dark UI</span>
          </div>
          <article className="profile-card">
            <div className="profile-glow" />
            <img src={avatar} alt="吴文豪头像" />
            <div>
              <p className="profile-role">{profile.title}</p>
              <h2>{profile.name}</h2>
            </div>
            <div className="profile-meta">
              <span>{profile.years}</span>
              <span>{profile.education}</span>
              <span>{profile.salary}</span>
            </div>
          </article>
        </aside>
      </section>

      <section className="metrics-row" aria-label="基础信息">
        {[
          ["经验", profile.years],
          ["学历", profile.education],
          ["期望薪资", profile.salary],
          ["状态", "在职-考虑机会"],
        ].map(([label, value]) => (
          <div className="metric" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </section>

      <section className="content-grid">
        <article className="panel advantage-panel" id="advantage">
          <div className="section-title">
            <CircleUserRound size={20} />
            <div>
              <span>Personal Edge</span>
              <h2>个人优势</h2>
            </div>
          </div>
          <div className="strength-list">
            {strengths.map((item, index) => (
              <p key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </p>
            ))}
          </div>
        </article>

        <article className="panel expectation-panel">
          <div className="section-title">
            <BriefcaseBusiness size={20} />
            <div>
              <span>Target Role</span>
              <h2>求职期望</h2>
            </div>
          </div>
          <div className="expectation-card">
            <strong>{profile.title}</strong>
            <span>{profile.salary}</span>
            <p>{profile.location}</p>
            <small>游戏、社交网络与媒体、互联网</small>
          </div>
        </article>
      </section>

      <section className="timeline-section panel" id="experience">
        <div className="section-title">
          <Building2 size={20} />
          <div>
            <span>Experience</span>
            <h2>工作经历</h2>
          </div>
        </div>
        <div className="timeline">
          {jobs.map((job) => (
            <article className="timeline-card" key={job.company}>
              <div className="timeline-dot" />
              <div className="timeline-heading">
                <div>
                  <h3>{job.company}</h3>
                  <p>{job.role}</p>
                </div>
                <span>{job.date}</span>
              </div>
              <p className="timeline-summary">{job.summary}</p>
              <div className="tag-row">
                {job.tags.map((tag) => (
                  <span key={`${job.company}-${tag}`}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-grid lower-grid">
        <article className="panel" id="projects">
          <div className="section-title">
            <PanelsTopLeft size={20} />
            <div>
              <span>Project Work</span>
              <h2>项目经历</h2>
            </div>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <a className="project-card" href="#experience" key={project.title}>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.detail}</p>
                </div>
                <ChevronRight size={20} />
              </a>
            ))}
          </div>
        </article>

        <article className="panel education-panel" id="education">
          <div className="section-title">
            <GraduationCap size={20} />
            <div>
              <span>Education</span>
              <h2>教育经历</h2>
            </div>
          </div>
          <div className="school-card">
            <div className="school-badge">汕大</div>
            <div>
              <h3>汕头大学</h3>
              <p>本科 / 视觉传达设计</p>
              <span>2021-2025</span>
            </div>
          </div>
        </article>
      </section>

      <footer className="footer-panel">
        <div>
          <span>Contact</span>
          <p>{profile.phone}</p>
          <p>{profile.wechat}</p>
        </div>
        <a href="mailto:hello@example.com">
          <MessageCircle size={18} />
          预约沟通
        </a>
      </footer>
    </main>
  );
}
