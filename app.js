const guideGroups = [
  {
    key: "faq",
    title: "高频常见问题",
    summary: "厅管理首次使用时最容易遇到的问题，先从这里快速定位答案。",
    topics: [
      {
        slug: "faq-host",
        title: "怎么设置主持",
        status: "常见",
        summary: "主持可以在后台提前配置，也可以由本档第一个排档主播临时设置。",
        sections: [
          {
            title: "推荐方式",
            body: "建议厅管理优先在创作服务中心配置主持档。配置好一周内每个小时对应的主持后，PC 开播助手的扣排和打卡会自动带出该小时主持，主播排档时不需要再临时选择。",
          },
          {
            title: "未提前配置时",
            body: "如果当前小时没有提前配置主持，第一个点击排档的主播需要先设置本档主持。主持设置完成后，其他主播才能继续正常排档。",
          },
        ],
        images: [
          {
            src: "./images/wiki-faq-host-01.png",
            alt: "创作服务中心设置一周主持",
            caption: "在创作服务中心-扣排/打卡设置内，可以设置一周主持。",
          },
          {
            src: "./images/wiki-faq-host-02.png",
            alt: "第一个排档主播设置主持",
            caption: "如果没有提前配置主持，第一个排档的主播需要先设置主持。",
          },
        ],
      },
      {
        slug: "faq-checkin-result",
        title: "在哪里查看打卡结果",
        status: "常见",
        summary: "主播和主持可在 PC 开播助手查看，厅管理可在创作服务中心查看实时打卡统计。",
        sections: [
          {
            title: "主播和主持查看",
            body: "在 PC 开播助手内可以查看打卡统计结果，包括本小时排档主播、收入、私信人数、麦序勾选、有效麦序、收光和全麦等记录。",
          },
          {
            title: "厅管理查看",
            body: "厅管理主要在创作服务中心的实时打卡统计中查看结果。这里更适合按小时、日、周维度做管理复盘，也方便查看排档主播的实时表现。",
          },
        ],
        images: [
          {
            src: "./images/wiki-faq-checkin-result-01.png",
            alt: "实时打卡统计入口",
            caption: "点击实时打卡统计，可按小时、日、周查看打卡结果。",
          },
          {
            src: "./images/wiki-faq-checkin-result-02.png",
            alt: "实时打卡统计结果页",
            caption: "厅管理可在实时打卡统计中查看排档、打卡和主播表现结果。",
          },
        ],
      },
      {
        slug: "faq-task-queue",
        title: "怎么可以任务排",
        status: "常见",
        summary: "任务排需要在扣排规则允许的时间内进行，任务分最低 300 分。",
        sections: [
          {
            title: "当前规则",
            body: "当前版本中，手速排排满以后才可以进行任务排。任务排排的是 2-7 麦，主播填写的任务分最低为 300 分，并且需要填写 100 的整数倍。",
          },
          {
            title: "顶麦规则",
            body: "当主播填写的任务分高于麦上已有主播的任务分时，可以把低任务主播或手速排主播顶下。被顶下的主播会收到弹窗通知，可以重新进行排档操作。",
          },
        
          {
            title: "后续优化",
            body: "任务排正在优化中，下个版本将支持无需手速排排满，也可以直接任务排。",
          },],
        images: [
          {
            src: "./images/wiki-faq-task-queue-01.png",
            alt: "任务排入口状态",
            caption: "手速排排满以后，才可进行任务排（优化中）。",
          },
          {
            src: "./images/task-setting-02.png",
            alt: "排档任务设置结果",
            caption: "任务可来自手动设置，也可按任务排、买8分数计算。",
          },
        ],
      },
      {
        slug: "faq-next-hour",
        title: "为什么配置后不是立即生效",
        status: "常见",
        summary: "扣排和打卡配置均为次小时生效。",
        sections: [
          {
            title: "生效规则",
            body: "创作服务中心里的扣排设置和打卡设置，保存后不会立刻影响当前小时，而是从下一个小时开始生效。",
          },
          {
            title: "为什么这样设计",
            body: "这样可以避免当前小时正在排档或打卡时规则突然变化，导致主播、主持和厅管理看到的规则不一致。",
          },
        ],
      },
      {
        slug: "faq-fixed-time",
        title: "为什么到了定排时间后不能正常排档",
        status: "常见",
        summary: "定排时间截止后，系统会确定下一个档的定排人员。",
        sections: [
          {
            title: "定排后的限制",
            body: "到达定排时间后，下一个档的定排人员已经确定，主播不能再正常进行手速排和任务排。",
          },
          {
            title: "还能怎么处理",
            body: "如果 2-7 麦还有空位，可以进行补排；如果 2-7 麦没有空位，则只能买8。",
          },
        ],
      },
      {
        slug: "faq-homework",
        title: "怎么判断排档主播的写作业情况",
        status: "常见",
        summary: "可在实时打卡统计中结合私信数据、收入和直播间活跃情况判断。",
        sections: [
          {
            title: "判断方式",
            body: "有些主播直播间不发言、不活跃时，会反馈自己在写作业或做私信维护。厅管理可以在实时打卡统计中查看排档主播的实时私信数据，结合当小时收入变化和直播间活跃情况做判断参考。",
          },
          {
            title: "管理建议",
            body: "如果主播长时间没有发言、收入没有变化、私信数据也没有明显动作，可以重点关注该主播是否存在占档、划水或未准备好上档的情况。",
          },
        
          {
            title: "打卡小秘书提醒",
            body: "除此以外，每档结束后，打卡小秘书会向打卡管理员和厅主发送上个档打卡结果，厅管理也可以结合私信报告做复盘。",
          },],
        images: [
          {
            src: "./images/private-message-stats.png",
            alt: "实时打卡统计中的私信数据",
            caption: "实时查看排档主播每小时私信人数，辅助判断主播是否真的在写作业。",
          },
          {
            src: "./images/wiki-faq-homework-01.png",
            alt: "打卡小秘书发送档期结果",
            caption: "每档结束后，打卡小秘书会向打卡管理员和厅主发送上个档打卡结果。",
          },
          {
            src: "./images/wiki-faq-homework-02.png",
            alt: "打卡小秘书结果详情",
            caption: "打卡小秘书结果可辅助厅管理判断主播当档表现。",
          },
        ],
      },
      {
        slug: "faq-diagnosis-empty",
        title: "为什么我的厅经营诊断未开放",
        status: "常见",
        summary: "经营诊断依赖持续稳定的扣排和打卡数据。",
        sections: [
          {
            title: "开放条件",
            body: "经营诊断需要依赖主播持续使用 PC 开播助手完成扣排和打卡。如果厅内扣排、打卡使用频率较低，系统可能暂不开放经营诊断，避免展示空数据或不准确的数据。",
          },
          {
            title: "为什么需要前置数据",
            body: "今日排档分析、本周经营分析都需要基于排档、有效麦序、黑麦、私信、收入等过程数据生成。数据越完整，经营诊断给厅管理的参考价值越高。",
          },
        ],
      },
    ],
  },
  {
    key: "overview",
    title: "功能概览",
    summary: "面向厅管理，了解 PC 开播助手如何从排档、打卡沉淀到经营分析。",
    topics: [
      {
        slug: "system-value",
        title: "这套工具能帮厅管理解决什么问题",
        status: "必读",
        summary: "PC 开播助手的排档、打卡、实时打卡统计和经营诊断是一条完整管理链路。",
        sections: [
          {
            title: "管理价值",
            body: "主播在 PC 开播助手完成扣排和打卡，系统把排档、任务、麦序、黑麦、收光、全麦等数据沉淀到实时打卡统计，再由经营诊断转成厅管理可执行的分析建议。如有疑问，请添加PC助手君。",
          },
          {
            title: "为什么建议使用平台工具",
            list: [
              "平台官方工具，稳定性更好，不依赖外站机器人，降低封禁和失效风险。",
              "数据由平台沉淀和维护，后续出现数据异常或争议时更容易追溯。",
              "扣排能提前筛掉没准备好上档、占位或划水的主播。",
              "打卡统计能减少任务、奖励、调账、收光、全麦等结算争议。",
              "经营诊断把过程数据转成管理动作，帮助厅管识别异常主播、风险主播和标杆主播。",
            ],
          },
          {
            title: "适用对象",
            list: ["主播：在 PC 开播助手扣排、打卡、查看打卡统计。", "主持：维护本档主持、打卡勾选、全麦分配、调账等操作。", "厅管理：配置规则、查看实时打卡结果、跟进异常，并通过经营诊断查看厅经营结构和风险。"],
          },
        ],
      },
    ],
  },
  {
    key: "before-use",
    title: "使用前必读",
    summary: "厅管理在配置前需要先确认入口、权限、生效时间和主播端使用位置。",
    topics: [
      {
        slug: "config-entry",
        title: "配置入口在哪里",
        status: "必读",
        summary: "扣排和打卡规则都在创作服务中心配置。",
        sections: [
          {
            title: "配置位置",
            body: "厅管理需要先在创作服务中心找到扣排/打卡设置。扣排时间、定排时间、置顶、报备、黑麦、打卡奖励、主持档、调账等规则都在这里配置。",
          },
          {
            title: "配置和使用的关系",
            body: "创作服务中心负责配置规则，PC 开播助手负责让主播和主持实际使用。后台规则配置完成后，会影响主播端的扣排弹窗、排麦表、打卡统计和后续经营诊断。",
          },
        ],
        images: [
          {
            src: "./images/wiki-config-entry-01.png",
            alt: "创作服务中心扣排打卡设置入口",
            caption: "创作服务中心-扣排/打卡设置入口。",
          },
        ],
      },
      {
        slug: "permission-rule",
        title: "谁可以编辑配置",
        status: "必读",
        summary: "当前仅厅主本人账号可以编辑，授权厅管理暂不可操作。",
        sections: [
          {
            title: "权限说明",
            body: "创作服务中心里的扣排和打卡规则配置，目前仅厅主本人账号可以编辑。授权厅管理暂时不能操作这些配置。",
          },
          {
            title: "使用建议",
            body: "如果厅内需要调整扣排或打卡规则，建议先由厅管理整理好规则，再由厅主账号统一修改，避免多人修改导致规则混乱。",
          },
        ],
      },
      {
        slug: "effective-time",
        title: "配置什么时候生效",
        status: "必读",
        summary: "所有配置内容保存后均次小时生效。",
        sections: [
          {
            title: "生效规则",
            body: "扣排和打卡设置保存后，不会立刻影响当前小时，而是从下一个小时开始生效。",
          },
          {
            title: "举例说明",
            body: "如果 10:20 修改了扣排时间、定排时间或打卡规则，通常从 11:00 后的档期开始按新规则执行。当前 10 点档仍按原规则处理。",
          },
        ],
        images: [
          {
            src: "./images/wiki-effective-time-01.png",
            alt: "配置次小时生效提示",
            caption: "扣排和打卡设置保存后，均次小时生效。",
          },
        ],
      },
      {
        slug: "pc-assistant-entry",
        title: "主播在哪里使用",
        status: "必读",
        summary: "扣排和打卡都在 PC 开播助手中使用。",
        sections: [
          {
            title: "主播端入口",
            body: "主播主要在 PC 开播助手中进行扣排、任务排、置顶、买8、报备和打卡相关操作。",
          },
          {
            title: "主持端操作",
            body: "主持也会在 PC 开播助手内参与打卡统计、麦序勾选、有效麦序勾选、全麦分配和调账等操作。",
          },
        ],
      },
    ],
  },
  {
    key: "kou-pai-config",
    title: "扣排设置",
    summary: "后台先配置扣排时间、定排时间、置顶、报备和黑麦规则。",
    topics: [
      {
        slug: "queue-time",
        title: "扣排时间",
        status: "配置",
        summary: "扣排时间决定每小时什么时候自动弹出排麦表。",
        sections: [
          {
            title: "规则说明",
            body: "系统默认每个小时的 40 分自动在 PC 开播助手里弹出排麦表，提醒主播进行扣排操作。厅管理也可以在创作服务中心调整每小时对应的弹窗分钟数。",
          },
          {
            title: "影响范围",
            body: "扣排时间会影响主播什么时候看到自动弹窗。如果主播错过自动弹窗，也可以主动点击扣排按钮打开排麦表。",
          },
        ],
        images: [
          {
            src: "./images/wiki-queue-time-01.png",
            alt: "扣排时间设置",
            caption: "扣排时间决定每小时什么时候自动弹出排麦表。",
          },
        ],
      },
      {
        slug: "fixed-queue-time",
        title: "定排时间",
        status: "配置",
        summary: "定排时间决定下一个档最终定排人员。",
        sections: [
          {
            title: "规则说明",
            body: "到达定排时间后，系统会确定下一个档的定排人员。定排截止后，主播不能再正常进行手速排和任务排。",
          },
          {
            title: "管理影响",
            body: "定排时间越早，主播排档窗口越短；定排时间越晚，主播有更多时间参与排档。厅管理可以根据本厅排档节奏设置。",
          },
        ],
        images: [
          {
            src: "./images/wiki-fixed-queue-time-01.png",
            alt: "定排时间设置入口",
            caption: "定排时间用于确定下一个档的定排人员。",
          },
          {
            src: "./images/wiki-fixed-queue-time-02.png",
            alt: "定排时间规则配置",
            caption: "到达定排时间后，主播不能再正常手速排或任务排。",
          },
        ],
      },
      {
        slug: "after-fixed-queue",
        title: "定排后怎么补排或买8",
        status: "配置",
        summary: "定排后是否还能排，取决于 2-7 麦是否有空位。",
        sections: [
          {
            title: "补排规则",
            body: "定排时间截止后，如果 2-7 麦还有空位，主播可以进行补排。",
          },
          {
            title: "买8规则",
            body: "如果 2-7 麦已经没有空位，主播不能再补排，只能买8。",
          },
        ],
        images: [
          {
            src: "./images/wiki-after-fixed-queue-01.png",
            alt: "定排后添加定排主播入口",
            caption: "主持可快速从麦上添加定排主播。",
          },
          {
            src: "./images/wiki-after-fixed-queue-02.png",
            alt: "从麦上添加定排主播步骤",
            caption: "主持快速从麦上添加定排主播步骤。",
          },
          {
            src: "./images/wiki-after-fixed-queue-03.png",
            alt: "主持帮助主播补排",
            caption: "主持可快速帮主播补排。",
          },
        ],
      },
      {
        slug: "top-score",
        title: "置顶分怎么设置",
        status: "配置",
        summary: "置顶分用于满足部分厅对手速置顶的需求。",
        sections: [
          {
            title: "置顶分是什么",
            body: "这里的置顶分可以理解为置顶卡对应的任务分。主播使用置顶时，实际任务为 0 分，不需要完成这个置顶分对应的任务。",
          },
          {
            title: "是否允许被顶",
            body: "如果厅里允许更高任务顶掉置顶，可以设置一个正常的置顶分。如果厅里不希望置顶被更高任务顶掉，可以把置顶分设置为很高的数字，例如 9999。",
          },
        ],
        images: [
          {
            src: "./images/wiki-top-score-01.png",
            alt: "置顶分设置",
            caption: "置顶分可简单理解为手速置顶对应分数。",
          },
        ],
      },
      {
        slug: "top-anchor",
        title: "怎么添加置顶主播",
        status: "配置",
        summary: "置顶主播需要先添加次数，主播端才能使用置顶。",
        sections: [
          {
            title: "添加方式",
            body: "在创作服务中心点击添加置顶主播，选择主播后为他添加置顶次数。",
          },
          {
            title: "次数规则",
            body: "置顶次数只在你选择的周期内生效，过期后次数自动失效。主播在 PC 开播助手内使用置顶成功后，置顶次数会自动减一。",
          },
          {
            title: "使用限制",
            body: "当前一个档只允许一个主播置顶。主播被更高任务顶下时，也会算作消耗一次置顶次数。",
          },
        ],
        images: [
          {
            src: "./images/wiki-add-top-anchor-01.png",
            alt: "添加置顶主播入口",
            caption: "在扣排设置中添加置顶主播。",
          },
          {
            src: "./images/wiki-add-top-anchor-02.png",
            alt: "设置主播置顶次数",
            caption: "选择主播后，可设置本周期内可用的置顶次数。",
          },
        ],
      },
      {
        slug: "report-rule",
        title: "报备规则",
        status: "配置",
        summary: "报备用于处理主播临时离开但仍需保留排档的情况。",
        sections: [
          {
            title: "当前规则",
            list: ["每档开始后，主播可以进行报备。", "报备时间为 15 分钟。", "一个档最多允许 2 位主播同时报备。", "一个主播每日最多允许报备 4 次。"],
          },
          {
            title: "回档要求",
            body: "主播报备后需要点击“回”来表示已回到本档。如果报备超时未回，系统会将主播标记为黑麦。",
          },
        
          {
            title: "后续开放",
            body: "后续会开放报备次数、报备时间等相关配置给厅自行配置。",
          },],
        images: [
          {
            src: "./images/wiki-report-rule-01.png",
            alt: "报备规则设置",
            caption: "报备规则用于配置报备时间、次数等能力。",
          },
        ],
      },
      {
        slug: "blackout-rule-config",
        title: "黑麦统计配置",
        status: "配置",
        summary: "黑麦用于识别排档后未正常活跃的主播。",
        sections: [
          {
            title: "自动统计规则",
            list: ["报备超时未归，系统自动判定为黑麦。", "连续 20 分钟未说话，系统自动统计为黑麦。", "一档累计说话时长不超过 8 分钟，系统自动统计为黑麦。"],
          },
          {
            title: "配置说明",
            body: "当前黑麦统计默认不支持主持手动勾选。如需调整相关权限或自动统计时长，后续可开放给厅主自行配置。",
          },
        ],
        images: [
          {
            src: "./images/wiki-blackout-config-01.png",
            alt: "黑麦统计配置",
            caption: "黑麦统计配置会影响系统自动识别黑麦的规则。",
          },
        ],
      },
    ],
  },
  {
    key: "checkin-config",
    title: "打卡设置",
    summary: "配置奖励展示、福利表、调账、管理员、主持档和奖励规则。",
    topics: [
      {
        slug: "global-checkin",
        title: "全局综合设置",
        status: "配置",
        summary: "全局综合设置会影响 PC 开播助手里的打卡展示。",
        sections: [
          {
            title: "奖励金额展示",
            body: "如果收光或全麦规则里填写了奖励金额，开启后主播可以在 PC 开播助手的打卡统计里看到自己可能获得的收光奖励或全麦奖励。",
          },
          {
            title: "麦序福利表展示",
            body: "如果厅里有麦序福利表，可以在这里上传。上传后，主播可以在 PC 开播助手里查看麦序福利表。",
          },
        ],
        images: [
          {
            src: "./images/checkin-global-setting.png",
            alt: "打卡全局综合设置",
            caption: "打卡综合设置中可控制奖励金额展示、麦序福利表展示等能力。",
          },
        ],
      },
      {
        slug: "reward-display",
        title: "奖励金额与麦序福利表",
        status: "配置",
        summary: "用于让主播在 PC 开播助手内更清楚地看到奖励和福利规则。",
        sections: [
          {
            title: "适用场景",
            body: "如果厅里需要主播知道收光、全麦或麦序相关福利，可以打开奖励展示并上传福利表，减少主播反复询问规则。",
          },
          {
            title: "展示位置",
            body: "配置完成后，主播会在 PC 开播助手的打卡统计相关位置看到奖励金额或麦序福利表。",
          },
        ],
        images: [
          {
            src: "./images/mic-benefit-image.png",
            alt: "麦序福利图配置示例",
            caption: "上传麦序福利图后，主播可在 PC 开播助手内查看。",
          },
        ],
      },
      {
        slug: "adjust-account",
        title: "调账设置",
        status: "配置",
        summary: "调账用于调整打卡统计结果，不会改变主播实际收益。",
        sections: [
          {
            title: "常见场景",
            list: ["礼物送错了，需要把统计分配给正确主播。", "某个主播想把收到的魅力值作为福利分配给其他主播。", "主持或财务需要在打卡统计里做参考调整。"],
          },
          {
            title: "重要说明",
            body: "调账只调整打卡统计里的结果，不会调整平台实际收益。调账后统计里会显示“调”字，代表这一笔记录有调整过，方便后续复盘和减少争议。",
          },
        ],
        images: [
          {
            src: "./images/adjust-account-01.png",
            alt: "调账操作第一步",
            caption: "调账操作示例 1：选择需要调整的记录。",
          },
          {
            src: "./images/adjust-account-02.png",
            alt: "调账操作第二步",
            caption: "调账操作示例 2：填写调整对象和调整结果。",
          },
          {
            src: "./images/adjust-account-03.png",
            alt: "调账操作第三步",
            caption: "调账操作示例 3：调整后统计结果会显示调账标记。",
          },
        ],
      },
      {
        slug: "checkin-admin",
        title: "PC 打卡管理员",
        status: "配置",
        summary: "PC 打卡管理员会收到打卡小秘书私信。",
        sections: [
          {
            title: "默认管理员",
            body: "厅主默认就是 PC 打卡管理员。",
          },
          {
            title: "私信内容",
            body: "打卡小秘书会每个小时私信打卡管理员，内容包含这个小时本厅的打卡结果和排档结果，例如主播昵称、主播收入、当小时私信人数、是否获得有效麦序等。",
          },
          {
            title: "统计维度",
            body: "打卡小秘书会按小时、日、周三个维度发送相关结果，方便管理及时跟进。",
          },
        ],
        images: [
          {
            src: "./images/wiki-checkin-admin-01.png",
            alt: "打卡管理员设置",
            caption: "设置 PC 打卡管理员后，该账号可收到打卡小秘书私信报告。",
          },
          {
            src: "./images/checkin-admin-02.png",
            alt: "打卡小秘书私信报告示例",
            caption: "PC 打卡管理员可收到打卡小秘书发送的小时、日、周维度报告。",
          },
        ],
      },
      {
        slug: "task-calc",
        title: "任务计算方式",
        status: "配置",
        summary: "任务计算方式会影响系统如何判断任务是否完成。",
        sections: [
          {
            title: "推荐选择",
            body: "通常建议选择第一种任务计算方式。这样可以满足大多数厅对任务完成的判断需求，也更容易和打卡统计结果保持一致。",
          },
          {
            title: "后续说明",
            body: "如果厅里有特殊任务口径，后续可以在具体规则页补充对应说明。",
          },
        ],
      },
      {
        slug: "host-schedule",
        title: "主持档设置",
        status: "配置",
        summary: "提前配置主持档，可以减少主播端临时设置主持的操作。",
        sections: [
          {
            title: "配置方式",
            body: "厅管理可以在这里设置一周内每个小时对应的主持。",
          },
          {
            title: "生效效果",
            body: "设置完成后，每个小时会自动在 PC 开播助手的扣排和打卡内生效该主持。主播扣排时无需再手动设置主持。",
          },
        ],
        images: [
          {
            src: "./images/host-schedule-01.png",
            alt: "主持档设置入口",
            caption: "在创作服务中心配置每周每小时对应的主持。",
          },
          {
            src: "./images/host-schedule-02.png",
            alt: "主持档设置明细",
            caption: "主持档配置后，会自动同步到 PC 开播助手的扣排和打卡中。",
          },
        ],
      },
      {
        slug: "light-reward",
        title: "收光奖励设置",
        status: "配置",
        summary: "收光奖励设置后，达到条件会自动统计收光明细。",
        sections: [
          {
            title: "统计结果",
            body: "完成收光奖励设置后，直播间达到收光条件时，系统会自动统计收光明细。",
          },
          {
            title: "展示位置",
            body: "收光明细会在 PC 开播助手内展示，同时也会展示收光记录，方便主持和厅管理核对。",
          },
        ],
        images: [
          {
            src: "./images/light-reward-01.png",
            alt: "收光奖励设置入口",
            caption: "设置收光规则后，次小时生效。",
          },
          {
            src: "./images/light-reward-02.png",
            alt: "收光奖励规则配置",
            caption: "直播间达到收光条件后，系统会自动统计收光明细。",
          },
          {
            src: "./images/wiki-light-reward-03.png",
            alt: "自动统计收光",
            caption: "达到收光条件后，系统会自动统计收光。",
          },
          {
            src: "./images/wiki-light-reward-04.png",
            alt: "查看收光记录",
            caption: "可在打卡统计中查看收光记录。",
          },
        ],
      },
      {
        slug: "all-mic-reward",
        title: "全麦奖励设置",
        status: "配置",
        summary: "达到全麦标准后，由主持进行全麦分配。",
        sections: [
          {
            title: "分配方式",
            body: "设置全麦奖励后，直播间达到全麦标准时，由主持进行分配全麦。",
          },
          {
            title: "记录方式",
            body: "主持分配完成后，结果会记录到打卡统计内，方便后续查看和核对。",
          },
        ],
        images: [
          {
            src: "./images/all-mic-reward-01.png",
            alt: "全麦奖励设置入口",
            caption: "设置全麦规则后，次小时生效。",
          },
          {
            src: "./images/all-mic-reward-02.png",
            alt: "全麦奖励规则配置",
            caption: "达到全麦标准后，由主持分配全麦并记录到打卡统计。",
          },
          {
            src: "./images/wiki-all-mic-reward-03.png",
            alt: "全麦奖励设置示例一",
            caption: "全麦奖励配置示例。",
          },
          {
            src: "./images/wiki-all-mic-reward-04.png",
            alt: "全麦奖励设置示例二",
            caption: "全麦奖励配置明细。",
          },
          {
            src: "./images/wiki-all-mic-reward-05.png",
            alt: "全麦分配操作示例一",
            caption: "达到全麦标准后，由主持进行全麦分配。",
          },
          {
            src: "./images/wiki-all-mic-reward-06.png",
            alt: "全麦分配操作示例二",
            caption: "分配完成后会进入打卡统计记录。",
          },
        ],
      },
      {
        slug: "daily-mic-reward",
        title: "日麦序奖励设置",
        status: "配置",
        summary: "日麦序奖励会统计到创作中心实时打卡统计内。",
        sections: [
          {
            title: "用途",
            body: "日麦序奖励用于按天统计主播麦序相关奖励。",
          },
          {
            title: "查看位置",
            body: "设置后，日麦序奖励会进入创作中心实时打卡统计，厅管理可以在统计结果中查看。",
          },
        ],
        images: [
          {
            src: "./images/daily-mic-reward.png",
            alt: "日麦序奖励设置",
            caption: "日麦序奖励设置后，会统计到创作中心实时打卡统计内。",
          },
        ],
      },
    ],
  },
  {
    key: "pc-queue",
    title: "主播端扣排",
    summary: "厅管理可用这一部分指导主播在 PC 开播助手里排麦、任务排、置顶、买8、取排和报备。",
    topics: [
      {
        slug: "open-queue-panel",
        title: "怎么打开排麦表",
        status: "主播端",
        summary: "排麦表可以自动弹出，也可以主动打开。",
        sections: [
          {
            title: "自动打开",
            body: "到达后台配置的扣排时间后，PC 开播助手会自动弹窗打开排麦表。系统默认每小时 40 分弹窗。",
          },
          {
            title: "主动打开",
            body: "主播也可以主动点击扣排按钮，手动打开排麦表。",
          },
        ],
      },
      {
        slug: "set-current-host",
        title: "本档主持怎么设置",
        status: "主播端",
        summary: "如果后台没有提前配置主持，第一位排档主播需要先设置本档主持。",
        sections: [
          {
            title: "需要设置的情况",
            body: "如果创作服务中心没有提前设置好本小时主持，第一个点击排档的主播需要先设置本档主持。",
          },
          {
            title: "设置完成后",
            body: "主持设置完成后，其他主播才能正常进行排档操作。",
          },
        ],
        images: [
          {
            src: "./images/wiki-set-current-host-01.png",
            alt: "本档主持设置",
            caption: "如果后台未提前设置主持，第一个排档主播需要先设置本档主持。",
          },
        ],
      },
      {
        slug: "speed-queue",
        title: "手速排",
        status: "主播端",
        summary: "手速排是主播正常抢 2-7 麦的基础方式。",
        sections: [
          {
            title: "当前规则",
            body: "当前支持手速排。现版本中，手速排排满以后，才可以进行任务排操作。",
          },
          {
            title: "后续优化",
            body: "下一个版本将优化为无需手速排排满，也可以进行任务排。",
          },
        ],
        images: [
          {
            src: "./images/wiki-speed-queue-01.png",
            alt: "手速排操作",
            caption: "手速排是主播正常抢 2-7 麦的基础方式。",
          },
        ],
      },
      {
        slug: "task-queue",
        title: "任务排",
        status: "主播端",
        summary: "任务排用于主播用任务分竞争 2-7 麦。",
        sections: [
          {
            title: "填写规则",
            body: "任务排排的是 2-7 麦。任务排最低分为 300 分，主播可以自行填入 100 的整数倍。",
          },
          {
            title: "顶麦规则",
            body: "当主播填写的任务分大于麦上已有任务分时，可以将麦上的低任务主播或手速排主播顶下。",
          },
        ],
        images: [
          {
            src: "./images/wiki-task-queue-01.png",
            alt: "任务排操作",
            caption: "任务排用于主播用任务分竞争 2-7 麦。",
          },
        ],
      },
      {
        slug: "be-topped",
        title: "被顶了怎么办",
        status: "主播端",
        summary: "被顶主播会收到弹窗通知，可重新进行排档。",
        sections: [
          {
            title: "通知方式",
            body: "当主播被更高任务分顶下后，PC 开播助手会弹出被顶通知。",
          },
          {
            title: "后续操作",
            body: "被顶主播可以重新进入排麦表，再次进行排档操作。",
          },
        ],
      },
      {
        slug: "use-top",
        title: "使用置顶",
        status: "主播端",
        summary: "主播有置顶次数时，可在扣排开始后、定排前使用置顶。",
        sections: [
          {
            title: "使用条件",
            body: "主播需要先有可用的置顶次数。置顶操作只能在扣排开始后、定排前进行。",
          },
          {
            title: "成功条件",
            body: "如果 2-7 麦上没有高于置顶分的主播，则该主播可以置顶成功。当前一个档只允许一个主播置顶。",
          },
        ],
      },
      {
        slug: "buy-eight",
        title: "买8",
        status: "主播端",
        summary: "买8通常用于定排后 2-7 麦没有空位的情况。",
        sections: [
          {
            title: "使用场景",
            body: "定排时间截止后，如果 2-7 麦没有空位，主播不能补排，只能买8。",
          },
        ],
      },
      {
        slug: "cancel-queue",
        title: "取排规则",
        status: "主播端",
        summary: "当前仅手速排支持取排。",
        sections: [
          {
            title: "可取排",
            body: "手速排可以进行取排操作。",
          },
          {
            title: "不可取排",
            body: "任务排、置顶和买8不支持主播自行取排。主持可在打卡统计中点击“移除定排主播”，实现主持取排。",
          },
        ],
      },
      {
        slug: "report-return",
        title: "报备与回",
        status: "主播端",
        summary: "报备后需要及时点击回，否则可能被标记黑麦。",
        sections: [
          {
            title: "报备规则",
            body: "每档开始后，主播可以进行报备。报备时间为 15 分钟，一个档最多允许 2 位主播同时报备，一个主播每日最多允许报备 4 次。",
          },
          {
            title: "回档要求",
            body: "主播报备后需要点击“回”，表示已经回到本档。如果报备超时未回，系统会将主播标记为黑麦。",
          },
        ],
        images: [
          {
            src: "./images/wiki-report-return-01.png",
            alt: "报备后点击回",
            caption: "报备后，主播需要点击“回”。",
          },
          {
            src: "./images/wiki-report-return-02.png",
            alt: "报备倒计时",
            caption: "报备倒计时可在排麦表中查看，超时后排麦表中会显示异常。",
          },
        ],
      },
    ],
  },
  {
    key: "stats",
    title: "打卡统计与实时统计",
    summary: "厅管理在这里查看排档、任务、麦序、黑麦、私信、收光和全麦等实时结果。",
    topics: [
      {
        slug: "view-checkin-result",
        title: "在哪里查看打卡结果",
        status: "统计",
        summary: "主播、主持和厅管理查看打卡结果的位置不同。",
        sections: [
          {
            title: "PC 开播助手",
            body: "主播和主持可以在 PC 开播助手的打卡统计里查看本小时排档主播、收入、私信人数、麦序、有效麦序、收光和全麦等结果。",
          },
          {
            title: "创作服务中心",
            body: "厅管理可以在创作服务中心的实时打卡统计中查看统计结果，更适合按小时、日、周维度做管理复盘。",
          },
        ],
        images: [
          {
            src: "./images/wiki-view-checkin-result-01.png",
            alt: "实时打卡统计入口",
            caption: "点击实时打卡统计，可按小时、日、周查看打卡结果。",
          },
          {
            src: "./images/wiki-view-checkin-result-02.png",
            alt: "实时打卡统计结果页",
            caption: "厅管理可在实时打卡统计中查看打卡结果。",
          },
        ],
      },
      {
        slug: "queue-to-checkin",
        title: "扣排结果如何进入打卡统计",
        status: "统计",
        summary: "扣排完成后，1-8 麦主播会自动进入打卡统计。",
        sections: [
          {
            title: "自动同步",
            body: "扣排完成后，排麦表中的 1-8 麦主播会自动添加到打卡统计的定排主播内。",
          },
          {
            title: "任务同步",
            body: "如果排档时有任务分，系统也会自动同步对应的任务分值，后续用于判断任务是否完成。",
          },
        ],
      },
      {
        slug: "task-complete",
        title: "任务完成、今日欠任务、可补任务",
        status: "统计",
        summary: "系统会根据收礼情况判断任务是否完成。",
        sections: [
          {
            title: "任务完成",
            body: "系统会通过主播收礼情况自行判断任务是否完成。",
          },
          {
            title: "今日欠任务",
            body: "如果任务没有完成，会显示到今日欠任务中。",
          },
          {
            title: "可补任务",
            body: "如果某个档后续有收礼，可以补今日欠任务，并展示在可补任务中。",
          },
        ],
        images: [
          {
            src: "./images/wiki-task-complete-01.png",
            alt: "打卡统计查看排档任务",
            caption: "可在打卡统计中查看排档任务。",
          },
          {
            src: "./images/wiki-task-complete-02.png",
            alt: "任务来源与修改",
            caption: "任务来自扣排，主持也可进行修改设置，最终以打卡统计为准。",
          },
        ],
      },
      {
        slug: "mic-check",
        title: "麦序勾选",
        status: "统计",
        summary: "麦序可以由主持手动勾选，也可以由系统自动勾选。",
        sections: [
          {
            title: "手动勾选",
            body: "主持可以在打卡统计里手动勾选或取消勾选麦序。",
          },
          {
            title: "自动勾选",
            body: "当定排主播收入大于 100 分时，系统会自动勾选麦序。",
          },
        ],
        images: [
          {
            src: "./images/wiki-mic-check-01.png",
            alt: "麦序勾选",
            caption: "主持可以在打卡统计中手动勾选或取消勾选麦序。",
          },
        ],
      },
      {
        slug: "blackout-stats",
        title: "黑麦统计",
        status: "统计",
        summary: "黑麦统计用于识别排档后未正常活跃的主播。",
        sections: [
          {
            title: "自动统计规则",
            list: ["报备超时未归，系统自动判定为黑麦。", "连续 20 分钟未说话，系统自动统计为黑麦。", "一档累计说话时长不超过 8 分钟，系统自动统计为黑麦。"],
          },
          {
            title: "查看方式",
            body: "黑麦统计结果会进入实时打卡统计，也会作为经营诊断识别异常主播的重要依据。",
          },
        ],
        images: [
          {
            src: "./images/wiki-blackout-stats-01.png",
            alt: "黑麦统计结果",
            caption: "黑麦统计用于识别排档后未正常活跃的主播。",
          },
        ],
      },
      {
        slug: "private-message-tip",
        title: "小技巧：看实时私信判断主播状态",
        status: "统计",
        summary: "实时私信数据可以帮助厅管理判断主播是否真的在维护用户。",
        sections: [
          {
            title: "适用场景",
            body: "如果主播直播间不发言、不活跃，却反馈自己在写作业或做私信维护，厅管理可以在实时打卡统计里查看排档主播的实时私信数据。",
          },
          {
            title: "判断参考",
            body: "建议结合实时私信人数、当小时收入变化和直播间活跃情况一起判断。如果三者都没有明显动作，就需要重点关注该主播是否存在占档或划水情况。",
          },
        ],
        images: [
          {
            src: "./images/wiki-private-message-tip-01.png",
            alt: "实时私信数据查看",
            caption: "厅管理可通过实时私信数据判断主播是否真的在维护用户。",
          },
        ],
      },
    ],
  },
  {
    key: "diagnosis",
    title: "经营诊断",
    summary: "帮助厅管理把排档与打卡数据转成可执行的经营建议。",
    topics: [
      {
        slug: "today-diagnosis",
        title: "今日主播排档分析",
        status: "管理端",
        summary: "帮助厅管快速识别主播排档效果和黑麦异常。",
        sections: [
          {
            title: "主要作用",
            body: "今日主播排档分析会展示主播使用 PC 开播助手排档的效果，帮助厅管理快速识别黑麦情况和重点异常主播。",
          },
          {
            title: "更新时间",
            body: "今日分析通常会在次日 8 点以前完成更新。",
          },
          {
            title: "开放说明",
            body: "目前该能力仅对高频使用扣排与打卡的厅开放。原因是好的分析结果需要前置完成扣排和打卡，避免展示错误信息或空数据。",
          },
        ],
        images: [
          {
            src: "./images/wiki-today-diagnosis-01.png",
            alt: "今日主播排档分析",
            caption: "今日主播排档分析帮助厅管理快速识别主播排档效果和黑麦异常。",
          },
        ],
      },
      {
        slug: "weekly-income",
        title: "厅收入健康度诊断",
        status: "管理端",
        summary: "分析厅收入结构是否健康。",
        sections: [
          {
            title: "诊断内容",
            body: "厅收入健康度诊断会分析主播收入结构，判断整个厅是否过度依赖某个或某几个大主播，新人主播流水贡献如何，整体收入结构是否健康。",
          },
          {
            title: "管理价值",
            body: "如果收入结构不健康，厅管理可以及时调整主播培养、排档分配和重点跟进策略。",
          },
        ],
        images: [
          {
            src: "./images/wiki-weekly-income-01.png",
            alt: "厅收入健康度诊断",
            caption: "厅收入健康度诊断用于分析厅收入结构是否健康。",
          },
        ],
      },
      {
        slug: "weekly-user",
        title: "厅用户贡献结构诊断",
        status: "管理端",
        summary: "判断厅内用户贡献结构是否健康。",
        sections: [
          {
            title: "诊断内容",
            body: "厅用户贡献结构诊断会根据平台生态判断厅内用户贡献结构是否健康。",
          },
          {
            title: "风险预警",
            body: "如果某些用户流水出现较大异常波动，系统会在这里给厅管理预警，帮助及时关注用户关系和主播承接情况。",
          },
        ],
        images: [
          {
            src: "./images/wiki-weekly-user-01.png",
            alt: "厅用户贡献结构诊断",
            caption: "厅用户贡献结构诊断用于判断厅内用户贡献结构是否健康。",
          },
        ],
      },
      {
        slug: "weekly-followup",
        title: "本周排档异常跟进总结",
        status: "管理端",
        summary: "帮助厅管理识别需要重点跟进的主播。",
        sections: [
          {
            title: "老油条主播",
            body: "如果主播上周排档异常，本周仍然异常，说明主播表现或管理跟进效果不达预期，需要重点治理。",
          },
          {
            title: "高危风险主播",
            body: "平台会结合多种行为分析主播是否可能存在心态问题或异常行为。如果主播存在流失风险，建议厅管理进行私下 1V1 沟通，了解真实情况。",
          },
          {
            title: "标杆主播与管理动作",
            body: "每周也可能出现值得表扬的标杆主播。系统会在排档总结里给厅管理提示，并输出下一步管理动作建议。",
          },
        ],
        images: [
          {
            src: "./images/wiki-weekly-followup-01.png",
            alt: "本周排档异常跟进总结",
            caption: "本周排档异常跟进总结用于提示持续异常、风险主播和标杆主播。",
          },
        ],
      },
      {
        slug: "monthly-summary",
        title: "本月经营总结",
        status: "管理端",
        summary: "本月经营总结用于承接更长期的经营复盘。",
        sections: [
          {
            title: "当前说明",
            body: "本月经营总结作为后续能力，用于帮助厅管理从月度视角复盘主播表现、收入结构、用户结构和管理动作效果。",
          },
        ],
      },
    ],
  },
];

const app = document.querySelector("#app");
let shouldScrollToArticle = false;
let pendingNavScrollTop = 0;

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

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

function scrollArticleToTop() {
  const article = document.querySelector(".guide-article");
  if (!article) return;

  const headerOffset = window.matchMedia("(max-width: 860px)").matches ? 0 : 96;
  const top = article.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: Math.max(top, 0),
    left: 0,
    behavior: "auto",
  });
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

function renderCustomSections(topic) {
  if (!topic.sections?.length) return "";

  return topic.sections
    .map((section) => {
      const body = section.body ? `<p>${section.body}</p>` : "";
      const list = section.list?.length
        ? `<ul class="guide-list">${section.list.map((item) => `<li>${item}</li>`).join("")}</ul>`
        : "";

      return `
        <section class="guide-section">
          <h2>${section.title}</h2>
          ${body}
          ${list}
        </section>
      `;
    })
    .join("");
}

function renderImages(topic) {
  if (!topic.images?.length) return "";

  return `
    <section class="guide-section">
      <h2>配图参考</h2>
      <div class="guide-image-grid">
        ${topic.images
          .map(
            (image) => `
              <figure class="guide-figure">
                <img src="${image.src}" alt="${image.alt}" loading="lazy" />
                <figcaption>${image.caption}</figcaption>
              </figure>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTopic(topic) {
  const { previous, next } = getTopicNeighbors(topic);
  const articleBody =
    topic.sections?.length
      ? renderCustomSections(topic)
      : `
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
      `;

  return `
    <article class="guide-article">
      <div class="guide-article__meta">
        <span>${topic.groupTitle}</span>
        <span>${topic.status}</span>
      </div>
      <h1>${topic.title}</h1>
      <p class="guide-article__summary">${topic.summary}</p>

      ${articleBody}
      ${renderImages(topic)}

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
  const navScrollTop = pendingNavScrollTop || document.querySelector(".guide-nav")?.scrollTop || 0;
  const shouldScroll = shouldScrollToArticle;

  app.innerHTML = `
    <header class="guide-header">
      <a class="guide-brand" href="#/${guideGroups[0].key}/${guideGroups[0].topics[0].slug}" data-topic-link="true">
        <span class="guide-brand__mark">PC</span>
        <span>
          <strong>PC开播助手·排档经营分析使用教程</strong>
          <small>面向厅管理</small>
        </span>
      </a>
    </header>

    <main class="guide-layout">
      <aside id="guide-nav" class="guide-nav" aria-label="目录">
        <div class="guide-nav__title">
          <span>目录</span>
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

  window.requestAnimationFrame(() => {
    const nav = document.querySelector(".guide-nav");
    if (nav) nav.scrollTop = navScrollTop;

    if (shouldScroll) {
      scrollArticleToTop();
    }
  });

  shouldScrollToArticle = false;
  pendingNavScrollTop = 0;
}

document.addEventListener("click", (event) => {
  const topicLink = event.target.closest("[data-topic-link]");
  const scrollNav = event.target.closest("[data-scroll-nav]");

  if (topicLink) {
    shouldScrollToArticle = true;
    pendingNavScrollTop = document.querySelector(".guide-nav")?.scrollTop || 0;
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
