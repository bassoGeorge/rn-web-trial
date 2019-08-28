#import "RNConfig.h"
#import <Foundation/Foundation.h>

@implementation RNConfig

RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString* buildEnvironment = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"Api host"];
  return @{ @"apiHost": buildEnvironment };
}

@end
