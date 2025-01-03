import { startServer } from './server';

import { NodeModule, ConstructorOf } from '@opensumi/ide-core-node';
import { ServerCommonModule } from '@opensumi/ide-core-node';
import { FileServiceModule } from '@opensumi/ide-file-service/lib/node';
import { ProcessModule } from '@opensumi/ide-process/lib/node';
import { FileSearchModule } from '@opensumi/ide-file-search/lib/node';
import { SearchModule } from '@opensumi/ide-search/lib/node';
import { TerminalNodePtyModule } from '@opensumi/ide-terminal-next/lib/node';
import { LogServiceModule } from '@opensumi/ide-logs/lib/node';
import { ExtensionModule } from '@opensumi/ide-extension/lib/node';
import { FileSchemeNodeModule } from '@opensumi/ide-file-scheme/lib/node';
import { AddonsModule } from '@opensumi/ide-addons/lib/node';
import { MiniCodeDesktopNodeModule } from './module';

import { ExtensionManagerModule } from '../extensionManager/node';


import { LocalDbNodeModule } from '../modules/local-store-db/node';
import { ServerClientNodeModule } from '../modules/server-client/node';
import { ToDoNodeModule } from '../modules/todo/node';
import { AppAdminNodeModule } from '../modules/admin/node';

export const CommonNodeModules: ConstructorOf<NodeModule>[] = [
  ServerCommonModule,
  LogServiceModule,
  FileServiceModule,
  ProcessModule,
  FileSearchModule,
  SearchModule,
  TerminalNodePtyModule,
  ExtensionModule,
  ExtensionManagerModule,
  FileSchemeNodeModule,
  AddonsModule,

  // 附加开发的
  ToDoNodeModule,
  LocalDbNodeModule,
  ServerClientNodeModule,
  AppAdminNodeModule
];

startServer({
  modules: [...CommonNodeModules, MiniCodeDesktopNodeModule],
}).then(() => {
  console.log('ready------------------------------>');
  if (process.send) {
    process.send('ready');
  }
});
