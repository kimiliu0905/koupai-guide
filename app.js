const guideGroups = [
  {
    key: "koupai",
    title: "扣排教程",
    summary: "覆盖运行、麦序、任务排、置顶、禁排、报备等扣排核心能力。",
    topics: [
      {
        slug: "start-run",
        title: "开始运行",
        status: "示例",
        summary: "用于说明如何启动扣排机器人或扣排服务。",
        scene: "厅管理需要让扣排功能开始接收群内指令时使用。",
        steps: ["确认当前账号具备管理权限。", "在指定群内发送开始运行指令。", "观察系统是否返回运行成功提示。"],
        examples: ["开始运行"],
        result: "系统提示扣排服务已开始运行，后续指令可以正常处理。",
      },
      {
        slug: "mic-order",
        title: "设置麦序",
        status: "示例",
        summary: "用于给主播设置、调整或确认麦序。",
        scene: "厅管理需要安排主播排麦，或临时调整某个主播的麦序时使用。",
        steps: ["确认主播昵称或编号。", "发送设置麦序指令。", "核对系统返回的麦序位置。"],
        examples: ["设置麦序 小鹿 3"],
        result: "系统返回该主播当前麦序位置，并在后续麦序列表中展示。",
      },
      {
        slug: "task-queue",
        title: "任务排",
        status: "待补充",
        summary: "用于说明任务排状态、任务值、任务累计和任务顶手速。",
      },
      {
        slug: "top-card",
        title: "置顶卡",
        status: "待补充",
        summary: "用于说明置顶卡查询、设置和置顶人数规则。",
      },
      {
        slug: "ban-queue",
        title: "禁排与解禁",
        status: "待补充",
        summary: "用于说明禁排名单、禁排、解禁和到期时间查询。",
      },
      {
        slug: "report",
        title: "报备设置",
        status: "待补充",
        summary: "用于说明报备规则和报备异常处理。",
      },
    ],
  },
  {
    key: "checkin",
    title: "打卡教程",
    summary: "覆盖打卡配置、有效麦序判定、打卡统计和异常处理。",
    topics: [
      {
        slug: "checkin-setting",
        title: "打卡设置",
        status: "示例",
        summary: "用于配置打卡规则和打卡入口。",
        scene: "厅管理需要开启或调整主播打卡规则时使用。",
        steps: ["确认本厅打卡周期和统计口径。", "进入打卡设置并调整规则。", "保存后检查主播端是否能正常打卡。"],
        examples: ["打卡设置"],
        result: "主播可按规则完成打卡，管理端能看到打卡结果。",
      },
      {
        slug: "valid-mic",
        title: "有效麦序判定",
        status: "待补充",
        summary: "用于说明什么情况下算有效麦序。",
      },
      {
        slug: "checkin-stats",
        title: "打卡统计",
        status: "待补充",
        summary: "用于说明如何查看打卡统计和异常数据。",
      },
      {
        slug: "exception-handle",
        title: "异常处理",
        status: "待补充",
        summary: "用于说明漏打卡、黑麦、收光等异常的处理方式。",
      },
    ],
  },
];

const app = document.querySelector("#app");
let shouldScrollToArticle = false;

function getAllTopics() {
  return guideGroups.flatMap((group) =>
    group.topics.map((topic) => ({
      ...topic,
      groupKey: group.key,
      groupTitle: group.title,
    })),
  );
}

function getRoute() {
  const raw = window.location.hash.replace(/^#\/?/, "");
  const [groupKey, slug] = raw.split("/");
  const firstGroup = guideGroups[0];
  const firstTopic = firstGroup.topics[0];

  return {
    groupKey: groupKey || firstGroup.key,
    slug: slug || firstTopic.slug,
  };
}

function findTopic(route) {
  const topic = getAllTopics().find(
    (item) => item.groupKey === route.groupKey && item.slug === route.slug,
  );

  return topic || getAllTopics()[0];
}

function makeTopicLink(topic) {
  return `#/${topic.groupKey}/${topic.slug}`;
}

function getTopicNeighbors(activeTopic) {
  const topics = getAllTopics();
  const index = topics.findIndex(
    (topic) => topic.groupKey === activeTopic.groupKey && topic.slug === activeTopic.slug,
  );

  return {
    previous: index > 0 ? topics[index - 1] : null,
    next: index >= 0 && index < topics.length - 1 ? topics[index + 1] : null,
  };
}

function renderNavigation(activeTopic) {
  return guideGroups
    .map((group) => {
      const items = group.topics
        .map((topic) => {
          const fullTopic = { ...topic, groupKey: group.key };
          const activeClass =
            activeTopic.groupKey === group.key && activeTopic.slug === topic.slug
              ? "guide-nav__link--active"
              : "";

          return `
            <a class="guide-nav__link ${activeClass}" href="${makeTopicLink(fullTopic)}" data-topic-link="true">
              <span>${topic.title}</span>
              <em>${topic.status}</em>
            </a>
          `;
        })
        .join("");

      return `
        <section class="guide-nav__group">
          <h2>${group.title}</h2>
          <p>${group.summary}</p>
          <div class="guide-nav__items">${items}</div>
        </section>
      `;
    })
    .join("");
}

function renderSteps(topic) {
  if (!topic.steps?.length) {
    return `<div class="guide-empty">该功能的详细步骤待补充，当前先保留目录位置。</div>`;
  }

  return `
    <ol class="guide-steps">
      ${topic.steps.map((step) => `<li>${step}</li>`).join("")}
    </ol>
  `;
}

function renderExamples(topic) {
  if (!topic.examples?.length) {
    return `<div class="guide-empty">暂无指令示例，后续会按实际规则补充。</div>`;
  }

  return topic.examples.map((example) => `<code>${example}</code>`).join("");
}

function renderTopic(topic) {
  const publicLink = `${window.location.origin}${window.location.pathname}${makeTopicLink(topic)}`;
  const { previous, next } = getTopicNeighbors(topic);

  return `
    <article class="guide-article">
      <div class="guide-article__meta">
        <span>${topic.groupTitle}</span>
        <span>${topic.status}</span>
      </div>
      <h1>${topic.title}</h1>
      <p class="guide-article__summary">${topic.summary}</p>

      <section class="guide-section">
        <h2>适用场景</h2>
        <p>${topic.scene || "待补充该功能的使用场景。"}</p>
      </section>

      <section class="guide-section">
        <h2>操作步骤</h2>
        ${renderSteps(topic)}
      </section>

      <section class="guide-section">
        <h2>指令示例</h2>
        <div class="guide-code-list">${renderExamples(topic)}</div>
      </section>

      <section class="guide-section">
        <h2>成功表现</h2>
        <p>${topic.result || "待补充该功能执行成功后的表现。"}</p>
      </section>

      <section class="guide-share">
        <h2>分享链接</h2>
        <p>${publicLink}</p>
      </section>

      <section class="guide-related" aria-label="切换其他问题">
        <h2>继续查看</h2>
        <div class="guide-related__actions">
          ${
            previous
              ? `<a href="${makeTopicLink(previous)}" data-topic-link="true">上一个：${previous.title}</a>`
              : `<span>已经是第一个问题</span>`
          }
          ${
            next
              ? `<a href="${makeTopicLink(next)}" data-topic-link="true">下一个：${next.title}</a>`
              : `<span>已经是最后一个问题</span>`
          }
        </div>
      </section>
    </article>
  `;
}

function render() {
  const activeTopic = findTopic(getRoute());

  app.innerHTML = `
    <header class="guide-header">
      <a class="guide-brand" href="#/${guideGroups[0].key}/${guideGroups[0].topics[0].slug}">
        <span class="guide-brand__mark">扣</span>
        <span>
          <strong>扣排打卡教程中心</strong>
          <small>公开分享版</small>
        </span>
      </a>
      <div class="guide-header__status">
        <span>手机可读</span>
        <span>无需登录</span>
        <span>持续更新</span>
      </div>
    </header>

    <main class="guide-layout">
      <aside id="guide-nav" class="guide-nav" aria-label="教程目录">
        <div class="guide-nav__title">
          <span>功能目录</span>
          <small>Step 2 框架校验</small>
        </div>
        ${renderNavigation(activeTopic)}
      </aside>
      ${renderTopic(activeTopic)}
    </main>

    <nav class="guide-mobile-actions" aria-label="手机快捷切换">
      <button type="button" data-scroll-nav="true">目录</button>
      ${
        getTopicNeighbors(activeTopic).previous
          ? `<a href="${makeTopicLink(getTopicNeighbors(activeTopic).previous)}" data-topic-link="true">上一个</a>`
          : `<span>上一个</span>`
      }
      ${
        getTopicNeighbors(activeTopic).next
          ? `<a href="${makeTopicLink(getTopicNeighbors(activeTopic).next)}" data-topic-link="true">下一个</a>`
          : `<span>下一个</span>`
      }
    </nav>
  `;

  if (shouldScrollToArticle && window.matchMedia("(max-width: 860px)").matches) {
    window.requestAnimationFrame(() => {
      document.querySelector(".guide-article")?.scrollIntoView({ block: "start" });
    });
  }

  shouldScrollToArticle = false;
}

document.addEventListener("click", (event) => {
  const topicLink = event.target.closest("[data-topic-link]");
  const scrollNav = event.target.closest("[data-scroll-nav]");

  if (topicLink) {
    shouldScrollToArticle = true;
    if (topicLink.getAttribute("href") === window.location.hash) {
      event.preventDefault();
      render();
    }
  }

  if (scrollNav) {
    document.querySelector(".guide-nav")?.scrollIntoView({ block: "start" });
  }
});

window.addEventListener("hashchange", render);
render();
