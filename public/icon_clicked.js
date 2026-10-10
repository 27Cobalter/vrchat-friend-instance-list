// MV3(Chrome)はaction、MV2(Firefox)はbrowserAction
;(chrome.action || chrome.browserAction).onClicked.addListener(function () {
  chrome.tabs.create({ url: 'index.html' })
})

// VRChat APIが拡張機能のOriginからのPOSTを403で弾くため、この拡張からのPOSTのみOriginを書き換える
// Firefoxは拡張ページのhostがruntime.idではなく内部UUIDなのでgetURLから取る
chrome.runtime.onInstalled.addListener(function () {
  if (!chrome.declarativeNetRequest) return
  chrome.declarativeNetRequest
    .updateDynamicRules({
      removeRuleIds: [1],
      addRules: [
        {
          id: 1,
          action: {
            type: 'modifyHeaders',
            requestHeaders: [
              { header: 'Origin', operation: 'set', value: 'https://vrchat.com' },
            ],
          },
          condition: {
            urlFilter: '||vrchat.com/api/',
            initiatorDomains: [new URL(chrome.runtime.getURL('')).host],
            requestMethods: ['post'],
            resourceTypes: ['xmlhttprequest'],
          },
        },
      ],
    })
    .catch(console.error)
})
