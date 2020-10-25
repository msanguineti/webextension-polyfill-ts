import { ActivityLog } from "./activityLog";
import { Alarms } from "./alarms";
import { Bookmarks } from "./bookmarks";
import { BrowserAction } from "./browserAction";
import { BrowserSettings } from "./browserSettings";
import { BrowsingData } from "./browsingData";
import { CaptivePortal } from "./captivePortal";
import { Clipboard } from "./clipboard";
import { Commands } from "./commands";
import { ContentScripts } from "./contentScripts";
import { ContextualIdentities } from "./contextualIdentities";
import { Cookies } from "./cookies";
import { DeclarativeContent } from "./declarativeContent";
import { Devtools } from "./devtools";
import { Dns } from "./dns";
import { Downloads } from "./downloads";
import { Events } from "./events";
import { Experiments } from "./experiments";
import { Extension } from "./extension";
import { ExtensionTypes } from "./extensionTypes";
import { Find } from "./find";
import { GeckoProfiler } from "./geckoProfiler";
import { History } from "./history";
import { I18n } from "./i18n";
import { Identity } from "./identity";
import { Idle } from "./idle";
import { Management } from "./management";
import { Manifest } from "./manifest";
import { ContextMenus } from "./contextMenus";
import { Menus } from "./menus";
import { NetworkStatus } from "./networkStatus";
import { NormandyAddonStudy } from "./normandyAddonStudy";
import { Notifications } from "./notifications";
import { Omnibox } from "./omnibox";
import { PageAction } from "./pageAction";
import { Permissions } from "./permissions";
import { Pkcs11 } from "./pkcs11";
import { Privacy } from "./privacy";
import { Proxy } from "./proxy";
import { Runtime } from "./runtime";
import { Search } from "./search";
import { Sessions } from "./sessions";
import { SidebarAction } from "./sidebarAction";
import { Storage } from "./storage";
import { Tabs } from "./tabs";
import { Theme } from "./theme";
import { TopSites } from "./topSites";
import { Types } from "./types";
import { Urlbar } from "./urlbar";
import { UserScripts } from "./userScripts";
import { WebNavigation } from "./webNavigation";
import { WebRequest } from "./webRequest";
import { Windows } from "./windows";
export { ActivityLog } from "./activityLog";
export { Alarms } from "./alarms";
export { Bookmarks } from "./bookmarks";
export { BrowserAction } from "./browserAction";
export { BrowserSettings } from "./browserSettings";
export { BrowsingData } from "./browsingData";
export { CaptivePortal } from "./captivePortal";
export { Clipboard } from "./clipboard";
export { Commands } from "./commands";
export { ContentScripts } from "./contentScripts";
export { ContextualIdentities } from "./contextualIdentities";
export { Cookies } from "./cookies";
export { DeclarativeContent } from "./declarativeContent";
export { Devtools } from "./devtools";
export { DevtoolsInspectedWindow } from "./devtools_inspectedWindow";
export { DevtoolsNetwork } from "./devtools_network";
export { DevtoolsPanels } from "./devtools_panels";
export { Dns } from "./dns";
export { Downloads } from "./downloads";
export { Events } from "./events";
export { Experiments } from "./experiments";
export { Extension } from "./extension";
export { ExtensionTypes } from "./extensionTypes";
export { Find } from "./find";
export { GeckoProfiler } from "./geckoProfiler";
export { History } from "./history";
export { I18n } from "./i18n";
export { Identity } from "./identity";
export { Idle } from "./idle";
export { Management } from "./management";
export { Manifest } from "./manifest";
export { ContextMenus } from "./contextMenus";
export { Menus } from "./menus";
export { NetworkStatus } from "./networkStatus";
export { NormandyAddonStudy } from "./normandyAddonStudy";
export { Notifications } from "./notifications";
export { Omnibox } from "./omnibox";
export { PageAction } from "./pageAction";
export { Permissions } from "./permissions";
export { Pkcs11 } from "./pkcs11";
export { Privacy } from "./privacy";
export { PrivacyNetwork } from "./privacy_network";
export { PrivacyServices } from "./privacy_services";
export { PrivacyWebsites } from "./privacy_websites";
export { Proxy } from "./proxy";
export { Runtime } from "./runtime";
export { Search } from "./search";
export { Sessions } from "./sessions";
export { SidebarAction } from "./sidebarAction";
export { Storage } from "./storage";
export { Tabs } from "./tabs";
export { Theme } from "./theme";
export { TopSites } from "./topSites";
export { Types } from "./types";
export { Urlbar } from "./urlbar";
export { UserScripts } from "./userScripts";
export { WebNavigation } from "./webNavigation";
export { WebRequest } from "./webRequest";
export { Windows } from "./windows";

export interface Browser {
    activityLog: ActivityLog.Static;
    alarms: Alarms.Static;
    bookmarks: Bookmarks.Static;
    browserAction: BrowserAction.Static;
    browserSettings: BrowserSettings.Static;
    browsingData: BrowsingData.Static;
    captivePortal: CaptivePortal.Static;
    clipboard: Clipboard.Static;
    commands: Commands.Static;
    contentScripts: ContentScripts.Static;
    contextualIdentities: ContextualIdentities.Static;
    cookies: Cookies.Static;
    declarativeContent: DeclarativeContent.Static;
    devtools: Devtools.Static;
    dns: Dns.Static;
    downloads: Downloads.Static;
    events: Events.Static;
    experiments: Experiments.Static;
    extension: Extension.Static;
    extensionTypes: ExtensionTypes.Static;
    find: Find.Static;
    geckoProfiler: GeckoProfiler.Static;
    history: History.Static;
    i18n: I18n.Static;
    identity: Identity.Static;
    idle: Idle.Static;
    management: Management.Static;
    manifest: Manifest.Static;
    contextMenus: ContextMenus.Static;
    menus: Menus.Static;
    networkStatus: NetworkStatus.Static;
    normandyAddonStudy: NormandyAddonStudy.Static;
    notifications: Notifications.Static;
    omnibox: Omnibox.Static;
    pageAction: PageAction.Static;
    permissions: Permissions.Static;
    pkcs11: Pkcs11.Static;
    privacy: Privacy.Static;
    proxy: Proxy.Static;
    runtime: Runtime.Static;
    search: Search.Static;
    sessions: Sessions.Static;
    sidebarAction: SidebarAction.Static;
    storage: Storage.Static;
    tabs: Tabs.Static;
    theme: Theme.Static;
    topSites: TopSites.Static;
    types: Types.Static;
    urlbar: Urlbar.Static;
    userScripts: UserScripts.Static;
    webNavigation: WebNavigation.Static;
    webRequest: WebRequest.Static;
    windows: Windows.Static;
}

export declare const browser: Browser;
