import { ExpoConfig } from '@expo/config-types';
export declare enum AppOwnership {
    Standalone = "standalone",
    Expo = "expo",
    Guest = "guest"
}
export declare enum ExecutionEnvironment {
    Bare = "bare",
    Standalone = "standalone",
    StoreClient = "storeClient"
}
export declare enum UserInterfaceIdiom {
    Handset = "handset",
    Tablet = "tablet",
    Unsupported = "unsupported"
}
export interface IOSManifest {
    buildNumber: string;
    platform: string;
    model: string | null;
    userInterfaceIdiom: UserInterfaceIdiom;
    systemVersion: string;
    [key: string]: any;
}
export interface AndroidManifest {
    versionCode: number;
    [key: string]: any;
}
export interface WebManifest {
    [key: string]: any;
}
export interface ManifestAsset {
    url: string;
}
/**
 * A modern manifest.
 */
export interface Manifest {
    id: string;
    createdAt: string;
    runtimeVersion: string;
    launchAsset: ManifestAsset;
    assets: ManifestAsset[];
    metadata: object;
}
/**
 * A classic manifest https://docs.expo.io/guides/how-expo-works/#expo-manifest
 */
export interface AppManifest extends ExpoConfig {
    /** Published Apps Only */
    releaseId?: string;
    revisionId?: string;
    releaseChannel?: string;
    packagerOpts?: {
        hostType?: string;
        dev?: boolean;
        strict?: boolean;
        minify?: boolean;
        urlType?: string;
        urlRandomness?: string;
        lanType?: string;
        [key: string]: any;
    };
    developer?: {
        tool?: string;
        [key: string]: any;
    };
    bundleUrl: string;
    debuggerHost?: string;
    mainModuleName?: string;
    logUrl?: string;
    [key: string]: any;
}
export interface PlatformManifest {
    ios?: IOSManifest;
    android?: AndroidManifest;
    web?: WebManifest;
    detach?: {
        scheme?: string;
        [key: string]: any;
    };
    logUrl?: string;
    scheme?: string;
    hostUri?: string;
    developer?: string;
    [key: string]: any;
}
export interface NativeConstants {
    name: 'ExponentConstants';
    appOwnership: AppOwnership | null;
    debugMode: boolean;
    deviceName?: string;
    deviceYearClass: number | null;
    executionEnvironment: ExecutionEnvironment;
    experienceUrl: string;
    expoRuntimeVersion: string | null;
    /**
     * The version string of the Expo client currently running.
     * Returns `null` in bare workflow and web.
     */
    expoVersion: string | null;
    isDetached?: boolean;
    intentUri?: string;
    /**
     * @deprecated Constants.installationId is deprecated in favor of generating your own ID and
     * storing it. This API will be removed in SDK 44.
     */
    installationId: string;
    isDevice: boolean;
    isHeadless: boolean;
    linkingUri: string;
    nativeAppVersion: string | null;
    nativeBuildVersion: string | null;
    /**
     * Classic manifest for Expo apps using classic updates.
     * Returns `null` in bare workflow and when `manifest2` is non-null.
     */
    manifest: AppManifest | null;
    /**
     * New manifest for Expo apps using modern Expo Updates.
     * Returns `null` in bare workflow and when `manifest` is non-null.
     */
    manifest2: Manifest | null;
    sessionId: string;
    statusBarHeight: number;
    systemFonts: string[];
    systemVersion?: number;
    platform?: PlatformManifest;
    [key: string]: any;
    getWebViewUserAgentAsync: () => Promise<string | null>;
}
export interface Constants extends NativeConstants {
    /**
     * @deprecated Constants.deviceId is deprecated in favor of generating your own ID and storing it.
     * This API will be removed in SDK 44.
     */
    deviceId?: string;
    /**
     * @deprecated Constants.linkingUrl has been renamed to Constants.linkingUri. Consider using the
     * Linking API directly. Constants.linkingUrl will be removed in SDK 44.
     */
    linkingUrl?: string;
    /**
     * @warning do not use this property. Use `manifest` by default.
     *
     * In certain cases accessing manifest via this property
     * suppresses important warning about missing manifest.
     */
    __unsafeNoWarnManifest?: AppManifest;
}
