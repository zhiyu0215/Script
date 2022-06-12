# 微信公众号 (By Choler)
^https?:\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/Wechat.js

# 微博去广告以及去除各部分推广模块 - cherish
^https?://m?api\.weibo\.c(n|om)/2/(cardlist|searchall|page|statuses/(unread_)?friends(/|_)timeline|groups/timeline|statuses/(unread_hot_timeline|extend|video_mixtimeline)|profile/(me|statuses)|video/(community_tab|remind_info|tiny_stream_video_list)|checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item|search/(finder|container_timeline|container_discover)) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js
# 删除微博开屏广告 - cherish
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_launch.js
# 自定义微博tab皮肤 - cherish
^https://api.weibo.cn/2/!/client/light_skin url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js
# 非会员设置tab皮肤 - cherish
^https://new.vip.weibo.cn/littleskin/preview url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js
# 删除小红书开屏广告 - cherish
^https://edith.xiaohongshu.com/api/sns/v2/system_service/splash_config url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/customize.js
# 删除b站推荐页广告 - cherish
^https://app.bilibili.com/x/v2/feed/index url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/customize.js

# 什么值得买(By blackmatrix7)
# 好价详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/other_modul url reject
# 好价详情页红包小助手
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/user_related_modul url reject
# Wiki(618晒物活动推广，将来可能不是广告)
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/wiki_related_modul url reject
# 开屏去广告
^https?:\/\/app-api\.smzdm\.com\/util\/loading url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 首页去广告
^https?:\/\/homepage-api\.smzdm\.com\/v3\/home url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好价去广告
^https?:\/\/haojia-api\.smzdm\.com\/home\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 好价详情页去广告
^https?:\/\/haojia\.m\.smzdm\.com\/detail_modul\/article_releated_modul url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 百科去广告
^https?:\/\/baike-api\.smzdm\.com\/home_v3\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 搜索结果去广告
^https?:\/\/s-api\.smzdm\.com\/sou\/list_v10 url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 搜索标签去广告
^https?:\/\/s-api\.smzdm\.com\/sou\/filter\/tags\/hot_tags url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js
# 值会员权益中心banner广告
^https?:\/\/zhiyou\.m\.smzdm\.com\/user\/vip\/ajax_get_banner url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/smzdm/smzdm_remove_ads.js

# 哔哩哔哩动画去广告 (By blackmatrix7)
# 去除动态中的话题
^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# 去除动态中的最常访问
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/mix_uplist url reject-dict
# 可能的一些推广(beta)
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# 推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 追番去广告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 动态去广告
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 开屏去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 我的页面处理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
# 漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/Flash url reject-dict
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/ListFlash url reject-dict
# By app2smile
^https?:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/bilibili/bilibili_plus.js
#^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js

# 知乎去广告(By blackmatrix7)
# 知乎处理用户信息
^https?:\/\/api\.zhihu\.com\/people\/ url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎信息流去广告
^https?:\/\/api\.zhihu\.com\/(moments|topstory)(\/|\?)?(recommend|action=|feed_type=)(?!\/people) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎回答列表去广告
^https?:\/\/api\.zhihu\.com\/v4\/questions url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎官方消息去广告
^https?:\/\/api\.zhihu\.com\/notifications\/v3\/(message|timeline\/entry\/system_message) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎预置关键词去广告
^https?:\/\/api\.zhihu\.com\/search\/preset_words\? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎热搜去广告
^https?:\/\/api\.zhihu\.com\/search\/top_search\/tabs\/hot\/items url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎热榜去广告
^https?:\/\/api\.zhihu\.com\/topstory\/hot-lists?(\?|\/) url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎评论去广告
^https?:\/\/api\.zhihu\.com\/(comment_v5\/)?(answers|comments?|articles|pins)\/\d+\/(root_|child_)?comments? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎回答列表去广告
^https?:\/\/www\.zhihu\.com\/appview\/v2\/answer\/.*(entry=(?!(preload-topstory|preload-search|preload-subscription)))? url script-response-body https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 知乎屏蔽关键词解锁
^https?:\/\/api\.zhihu\.com\/feed-root\/block url script-analyze-echo-response https://gist.githubusercontent.com/blackmatrix7/2e550ebf28ca60d620654e394ec47e0b/raw/zhihu.js
# 拦截知乎开屏广告
URL-REGEX,^https?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2\? url reject-dict
# 知乎去除回答下的广告
^https?:\/\/www\.zhihu\.com\/api\/v4\/answers\/\d+\/recommendations url reject-dict
# 知乎其他广告拦截
^https?:\/\/api\.zhihu\.com\/(notifications\/v3\/count|v3\/package|me\/guides|drama\/living-info|ad|fringe|commercial|market\/popovers|.*featured-comment-ad) url reject-dict
# 知乎拦截部分预加载
# ^https?:\/\/www\.zhihu\.com\/appview\/(p|v2\/answer|zvideo)\/.*entry=(preload-topstory|preload-search|preload-subscription) url reject-dict
# 知乎网页版去广告
^https?:\/\/www\.zhihu\.com\/api\/v4/(questions|anwsers)\/\d+/related-readings url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v4\/hot_recommendation url reject-dict
^https?:\/\/www\.zhihu\.com\/commercial_api\/banners_v3\/mobile_banner url reject-dict
^https?:\/\/zhuanlan\.zhihu\.com\/api\/articles\/\d+\/recommendation url reject-dict
# 知乎品牌提问广告
^https?:\/\/api\.zhihu\.com\/brand\/question\/\d+/card\? url reject-dict
^https?:\/\/www\.zhihu\.com\/api\/v\d+\/brand\/question/\d+/card\? url reject-dict
# 屏蔽消息页面上拉的用户精选
^https?:\/\/api\.zhihu\.com/moments/hybrid\? url reject-dict
# 屏蔽知乎“我的”页面推荐开通会员的卡片
^https?:\/\/api\.zhihu\.com\/people\/self\/new_user_card url reject-200

# 京东开屏 (By blackmatrix7)
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/startup/startup.js
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-array
# 京东
# hostname = bdsp-x.jd.com, api.m.jd.com, m.360buyimg.com, img12.360buyimg.com
^https:\/\/.+\/client?functionId=lauch\/lauchConfig&appName=paidaojia url reject
^https:\/\/bdsp-x.jd.com\/adx\/ url reject
^https:\/\/m.360buyimg.com\/mobilecms\/s640x1136_jfs\/ url reject
^https:\/\/img12.360buyimg.com.+width=\d{4}&height=\d{4} url reject
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=start url reject
^https:\/\/106.39.169.231\/client\.action\?functionId=start url reject

# 淘宝
# hostname = gw.alicdn.com,heic.alicdn.com
^https?:\/\/(gw|heic)\.alicdn\.com\/\w{2}s\/.+\.jpg_(9\d{2}|\d{4}) url reject-dict
^https?:\/\/(gw|heic)\.alicdn\.com\/imgextra\/.+\d{4}-\d{4}\.jpg_(9\d{2}|\d{4}) url reject-dict
^https:\/\/gw.alicdn.com\/tfs\/.+-1125-1602 url reject

# 闲鱼
^https:\/\/gw.alicdn.com\/mt\/ url reject
^https:\/\/gw.alicdn.com\/tfs\/.+\d{3,4}-\d{4} url reject
^https:\/\/gw.alicdn.com\/tps\/.+\d{3,4}-\d{4} url reject

# 豆瓣
# hostname = api.douban.com, frodo.douban.com, doubanio.com
^https:\/\/(\d{1,3}.){1,3}\d{1,3}\/view\/dale-online\/dale_ad\/ url reject
^https:\/\/api.douban.com\/v2\/app_ads\/common_ads url reject
^https:\/\/frodo.douban.com\/api\/v2\/movie\/banner url reject
^https:\/\/img\d.doubanio.com\/view\/dale-online\/dale_ad\/ url reject
^https://api.douban.com\b.*\/common_ads\?.* url reject
^https?:\/\/api\.douban\.com\/v\d\/app_ads\/ url reject

# 美团
# hostname = elemecdn.com, elecfans.com
^https:\/\/p\d.meituan.net\/(mmc|wmbanner)\/ url reject
^https?:\/\/img\.meituan\.net\/(adunion|display|midas)\/.+\.(gif|jpg|jpg\.webp)$ url reject
^https?:\/\/p\d\.meituan\.net\/movie\/[A-Za-z0-9]+\.jpg\?may_covertWebp url reject
^https?:\/\/s3plus\.meituan\.net\/.+\/linglong\/.+\.(gif|jpg|mp4) url reject

# 头条
# hostname = d.pstatp.com
^https:\/\/p\d.pstatp.com\/origin url reject
^https:\/\/pb\d.pstatp.com\/origin url reject

# 喜马拉雅
# hostname = fdfs.xmcdn.com
^https:\/\/adse.+.com\/[a-z]{4}\/loading\?appid= url reject
^https:\/\/adse.ximalaya.com\/ting\/feed\?appid= url reject
^https:\/\/adse.ximalaya.com\/ting\/loading\?appid= url reject
^https:\/\/adse.ximalaya.com\/ting\?appid= url reject
^https:\/\/fdfs.xmcdn.com\/group21\/M03\/E7\/3F\/ url reject
^https:\/\/fdfs.xmcdn.com\/group21\/M0A\/95\/3B\/ url reject
^https:\/\/fdfs.xmcdn.com\/group22\/M00\/92\/FF\/ url reject
^https:\/\/fdfs.xmcdn.com\/group22\/M05\/66\/67\/ url reject
^https:\/\/fdfs.xmcdn.com\/group22\/M07\/76\/54\/ url reject
^https:\/\/fdfs.xmcdn.com\/group23\/M01\/63\/F1\/ url reject
^https:\/\/fdfs.xmcdn.com\/group23\/M04\/E5\/F6\/ url reject
^https:\/\/fdfs.xmcdn.com\/group23\/M07\/81\/F6\/ url reject
^https:\/\/fdfs.xmcdn.com\/group23\/M0A\/75\/AA\/ url reject
^https:\/\/fdfs.xmcdn.com\/group24\/M03\/E6\/09\/ url reject
^https:\/\/fdfs.xmcdn.com\/group24\/M07\/C4\/3D\/ url reject
^https:\/\/fdfs.xmcdn.com\/group25\/M05\/92\/D1\/ url reject

# 讯飞
# hostname = imeclient.openspeech.cn
^https:\/\/imeclient.openspeech.cn\/adservice\/ url reject

# 虎扑
# hostname = hoopchina.com.cn, games.mobileapi.hupu.com
^https:\/\/i\d.hoopchina.com.cn\/blogfile\/\/d+\/\/d+\/BbsImg.(?<=(big.(png|jpg)))$ url reject
^https:\/\/games.mobileapi.hupu.com\/.+\/(search|interfaceAdMonitor|status|hupuBbsPm)\/(hotkey|init|hupuBbsPm). url reject
^https:\/\/games.mobileapi.hupu.com\/interfaceAdMonitor url reject
^https:\/\/i1.hoopchina.com.cn\/blogfile\/.+_\d{3}x\d{4} url reject
^https?:\/\/games\.mobileapi\.hupu\.com\/.+\/(interfaceAdMonitor|interfaceAd)\/ url reject

# 高德地图
# hostname = amap.com, youku.com
^https:\/\/m5.amap.com\/ws\/valueadded\/ url reject
^https:\/\/m\d\.amap\.com\/ws\/valueadded\/alimama\/splash_screen\/ url reject
^http:\/\/ems\.youku\.com\/imp\? url reject
^http:\/\/optimus-ads\.amap\.com\/uploadimg\/.+ url reject

# 百度地图
# hostname = *.bdstatic.com
#^https?:\/\/.+\.bdstatic\.com\/-0U0bnSm1A5BphGlnYG\/tam-ogel\/.+\.jpg url reject
^https:\/\/dss0\.bdstatic\.com\/.+/tam-ogel\/.+\.jpg url reject

# 去哪儿
# hostname = support.you.163.com
^https://support.you.163.com\/appversync\/check.do\?app_ver=.* url reject

# 携程
# hostname = ma-adx.ctrip.com,m.ctrip.com
^https:\/\/ma-adx\.ctrip\.com\/_ma\.gif url reject
^https:\/\/m\.ctrip\.com\/restapi\/.+\/json\/tripAds url reject
^https:\/\/m\.ctrip\.com\/html5\/webresource\/js\/iscroll\.js$ url reject

# 网易云
# hostname = *nstool.netease.com, m.ads.8le8le.com, iadmusicmat.music.com
^https?:\/\/iadmusicmat\.music\.126\.net\/.+\.jpg url reject
^http:\/\/interface\.music\.163\.com\/eapi\/ad\/config\/get url reject
^https?:\//m\.ads\.8le8le\.com\/adShow url reject
^https://only\b.*nstool.netease.com\/info.js\?referer=https:\/\/nstool.netease.com\/info.js url reject

# 小红书
# hostname = pages.xiaohongshu.com, www.xiaohongshu.com
^https:\//www.xiaohongshu.com\/api\/sns\/v1\/ads\/apple\/record* url reject
^https:\//www.xiaohongshu.com\/api\/sns\/v1\/tag\/ads_engage* url reject
^https:\//pages.xiaohongshu.com\/data\/native\/matrix_switches* url reject
^https:\//www\.xiaohongshu\.com\/api\/sns\/v1\/ads\/resource* url reject

# 腾讯视频
# hostname = news.l.qq.com, *.tc.qq.com, wa.gtimg.com
^https://news.l.qq.com\/app\? url reject
^http:\/\/video\.dispatch\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/.+\/vmind\.qqvideo\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/wa\.gtimg\.com\/adxcdn\/.+\.jpg url reject

# 爱奇艺
# hostname = act.vip.iqiyi.com,*.iqiyipic.com, *.iqiyi.com
^http:\/\/.+\.iqiyipic\.com\/image\/.+\/ad\/.+\.jpg url reject
^http:\/\/static-s\.iqiyi\.com\/common\/.+\/Small_video\/a2\/af\/.+\.png url reject
^http://msga/.cupid/.iqiyi/.com\/scp2\.gif url reject
^https?:\/\/ssports\.iqiyi\.com\/app\/ url reject
^https?:\/\/ssports\.iqiyi\.com\/json\/shop\/shopInfo url reject
^https?:\/\/.+\.iqiyi\.com\/videos\/other\/20$ url reject
^https?:\/\/.+\.iqiyipic\.com\/image\/20*_100000 url reject
^https?:\/\/t7z\.cupid\.iqiyi\.com\/show url reject
^https?:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject
^https?:\/\/act\.vip\.iqiyi\.com\/interact\/api\/show\.do url reject
^https?:\/\/act\.vip\.iqiyi\.com\/interact\/api\/v\d\/show url reject

# 百度网盘
# hostname = *.baidu.com, *.hpplay.cn, ndstatic.cdn.bcebos.com, issuecdn.baidupcs.com
http:\/\/rp\.hpplay\.cn\/logouts url reject
https:\/\/pan\.baidu\.com\/pmall\/order\/privilege\/info url reject
https:\/\/pan\.baidu\.com\/rest\/.+\/pcs\/adx url reject
https:\/\/pan\.baidu\.com\/api\/useractivity\/activity url reject
https?:\/\/pan\.baidu\.com\/act\/.+\/bchannel\/list url reject
https:\/\/sofire\.baidu\.com\/ios\/.+ url reject
https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/js\/.+\.js url reject
https:\/\/ndstatic\.cdn\.bcebos\.com\/activity\/welfare\/index\.html url reject
https:\/\/pan\.baidu\.com\/pmall\/order\/privilege\/info url reject
https:\/\/staticsns\.cdn\.bcebos\.com\/amis\/.+/banner.png url reject
https:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/ url reject
https:\/\/pan\.baidu\.com\/rest\/2.0\/pcs\/adv\? url reject
https:\/\/pan\.baidu\.com\/component\/view\/(1510|1130)\?(vip|from) url reject

# 百度贴吧 ((By TributePaulWalker)
# hostname = *.tieba.baidu.com
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/\w+\/\w+\/(sync|newRnSync|mlog) url reject
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/c\/s\/splashSchedule url reject
# 贴吧去广告 (By blackmatrix7)
^https?://c.tieba.baidu.com/\w+/\w+/(sync|newRnSync|newlog|mlog) url reject-dict
^https?:\/\/c\.tieba\.baidu\.com\/\w+\/\w+\/(sync|newRnSync|newlog|mlog) url reject-200
^https?:\/\/c\.tieba\.baidu\.com\/c\/f\/forum\/getAdInfo url reject
^https?:\/\/c\.tieba\.baidu\.com\/c\/p\/img\?src= url reject-img
^https?:\/\/c\.tieba\.baidu\.com\/c\/s\/logtogether\?cmd= url reject-img
^https?:\/\/c\.tieba\.baidu\.com\/c\/s\/splashSchedule url reject

# YouTube去广告
^https?:\/\/.+\.googlevideo\.com\/.+&oad url reject-img
^https?:\/\/.+\.googlevideo\.com\/.+ctier url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+ad_ url reject-img
^https?:\/\/youtubei\.googleapis\.com\/youtubei\/.+log_ url reject-img
^https?:\/\/.+\.youtube\.com\/get_midroll_ url reject-img
^https?:\/\/premiumyva\.appspot\.com\/vmclickstoadvertisersite url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/ads url reject-img
^https?:\/\/.+\.youtube\.com\/api\/stats\/.+adformat url reject-img
^https?:\/\/.+\.youtube\.com\/pagead\/ url reject-img
^https?:\/\/.+\.youtube\.com\/ptracking url reject-img


hostname = mp.weixin.qq.com, api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, app-api.smzdm.com, homepage-api.smzdm.com, haojia-api.smzdm.com, haojia.m.smzdm.com, baike-api.smzdm.com, s-api.smzdm.com, zhiyou.m.smzdm.com, app.bilibili.com, *.bilibili.com, api.live.bilibili.com, api.vc.bilibili.com, *.zhihu.com, business.msstatic.com, bdsp-x.jd.com, api.m.jd.com, m.360buyimg.com, img12.360buyimg.com, gw.alicdn.com,heic.alicdn.com, api.douban.com, frodo.douban.com, doubanio.com, elemecdn.com, elecfans.com, d.pstatp.com, fdfs.xmcdn.com, imeclient.openspeech.cn, hoopchina.com.cn, games.mobileapi.hupu.com, amap.com, youku.com, *.bdstatic.com, support.you.163.com, ma-adx.ctrip.com,m.ctrip.com, *nstool.netease.com, m.ads.8le8le.com, iadmusicmat.music.com, pages.xiaohongshu.com, www.xiaohongshu.com, news.l.qq.com, *.tc.qq.com, wa.gtimg.com, act.vip.iqiyi.com,*.iqiyipic.com, *.iqiyi.com, *.baidu.com, *.hpplay.cn, ndstatic.cdn.bcebos.com, issuecdn.baidupcs.com, *.tieba.baidu.com
