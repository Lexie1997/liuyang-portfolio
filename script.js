const videos = [
  {
    title: "师弟，快来做实验了",
    platform: "微信视频号",
    metric: "赞 1803 / 转发 418 / 收藏 802 / 评论 108",
    summary: "用实验室真实场景和轻剧情包装科研日常，8 秒内完成角色、场景与情绪钩子，带动高收藏和转发。",
    type: "cover",
    cover: "assets/video-cover-1.jpg",
    url: "https://weixin.qq.com/sph/AUtYkjzi8E"
  },
  {
    title: "北大化学实验安全主题视频",
    platform: "北大化学公众号 / 微信视频号",
    metric: "赞 179 / 转发 192 / 收藏 89 / 评论 11",
    summary: "参与学院实验安全传播内容创作，将实验室安全提醒包装成更具情绪记忆点和传播性的短视频，并由北大化学官方账号发布。",
    type: "cover",
    cover: "assets/video-cover-2.jpg",
    url: "https://weixin.qq.com/sph/A62cArlmoe"
  },
  {
    title: "实验室清朝老试剂系列",
    platform: "小红书",
    metric: "浏览 102214 / 评论 332 / 点赞 1576 / 收藏 195 / 分享 516",
    summary: "把实验室里的老试剂包装成系列化内容，用猎奇标题、真实物料和轻科普表达获得 10 万+ 浏览。",
    type: "cover",
    cover: "assets/video-cover-3.jpg",
    url: "https://www.xiaohongshu.com/discovery/item/6708309c000000002a037b1e?source=webshare&xhsshare=pc_web&xsec_token=YBCgOYScNjPsyhls6e7ioRlhbo_0U8colghmaBl7pIHDI=&xsec_source=pc_share"
  }
];

const renderMedia = (video) => {
  if (video.type === "iframe" && video.src) {
    return `<iframe src="${video.src}" title="${video.title}" loading="lazy" allowfullscreen></iframe>`;
  }

  if (video.type === "mp4" && video.src) {
    return `<video src="${video.src}" controls playsinline preload="metadata"></video>`;
  }

  if (video.cover) {
    return `<a class="cover-link" href="${video.url || "#"}" target="_blank" rel="noreferrer"><img src="${video.cover}" alt="${video.title}封面" /></a>`;
  }

  return `<div class="media-placeholder"><span>${video.title}</span></div>`;
};

const videoGrid = document.querySelector("#videoGrid");
if (videoGrid) {
  videoGrid.innerHTML = videos.map((video) => `
    <article class="video-card">
      <div class="video-frame">${renderMedia(video)}</div>
      <h3>${video.title}</h3>
      <p>${video.summary}</p>
      <dl>
        <div><dt>平台</dt><dd>${video.platform}</dd></div>
        <div><dt>数据</dt><dd>${video.metric}</dd></div>
      </dl>
    </article>
  `).join("");
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
