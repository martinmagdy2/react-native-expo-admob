# React Native AdMob Template

This repository contains a pre-configured React Native project with Google AdMob integration, making it easy to start implementing mobile ads in your application.

## Features

- Pre-configured Google AdMob setup
- Ready-to-use React Native project
- Configured for both iOS and Android platforms
- Includes necessary dependencies and configurations

## Prerequisites

- Node.js and npm installed
- React Native development environment set up
- Xcode (for iOS development)
- Android Studio (for Android development)

## Setting up your AdMob Account

1. Go to [Google AdMob](https://admob.google.com/)
2. Sign in with your Google account
3. Create a new app in AdMob:
   - Click on "Apps" in the sidebar
   - Click "Add App"
   - Choose your platform (iOS/Android)
   - Enter your app details

## Configuring AdMob IDs

### 1. Get Your App IDs
After creating your app in AdMob, you'll receive:
- An App ID for iOS
- An App ID for Android

### 2. Update Configuration

Replace the existing AdMob IDs in your `app.json` file:

```json
{
  "expo": {
    ...
    "ios": {
      "bundleIdentifier": "your.bundle.identifier",
      "config": {
        "googleMobileAdsAppId": "YOUR-IOS-ADMOB-APP-ID"
      }
    },
    "android": {
      "package": "your.package.name",
      "config": {
        "googleMobileAdsAppId": "YOUR-ANDROID-ADMOB-APP-ID"
      }
    }
  }
}
```

## Creating Ad Units

1. In your AdMob console, go to "Apps" → Your App → "Ad units"
2. Click "Create ad unit"
3. Choose your ad format:
   - Banner ads
   - Interstitial ads
   - Rewarded ads
4. Name your ad unit and save
5. Copy the Ad Unit ID and use it in your React Native code

## Testing

For testing ads during development, use these test IDs:

- iOS Banner: ca-app-pub-3940256099942544/2934735716
- iOS Interstitial: ca-app-pub-3940256099942544/4411468910
- iOS Rewarded: ca-app-pub-3940256099942544/1712485313

- Android Banner: ca-app-pub-3940256099942544/6300978111
- Android Interstitial: ca-app-pub-3940256099942544/1033173712
- Android Rewarded: ca-app-pub-3940256099942544/5224354917

## Important Notes

- Always test your ads with test IDs before publishing
- Review and comply with Google AdMob policies
- Keep your AdMob IDs secure and never share them publicly
- Make sure to update your privacy policy to include ad-related information

## Support

For any issues or questions:
- Check [Google AdMob documentation](https://developers.google.com/admob)
- Visit [React Native Google Mobile Ads documentation](https://docs.page/invertase/react-native-google-mobile-ads)