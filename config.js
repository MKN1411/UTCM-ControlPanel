// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const msalConfig = {
  auth: {
    clientId: '6f636cfa-46da-4fe2-8f67-e6dddc56c33f',
    redirectUri: 'https://mkn1411.github.io/UTCM-ControlPanel/'
  }
};

const msalRequest = {
  scopes: [
    'user.read',
    'ConfigurationMonitoring.ReadWrite.All'
  ]
}
