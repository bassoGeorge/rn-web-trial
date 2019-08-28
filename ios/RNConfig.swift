//
//  RNConfig.swift
//  nativeWeb2
//
//  Created by Harsha Yarabarla on 28/08/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit

@objc(RNConfig)
class RNConfig: NSObject,RCTBridgeModule {
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
  static func moduleName() -> String! {
    return "RNConfig"
  }
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["apiHost": Constants.API.host];
  }

}
