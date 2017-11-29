/**
 *
 *  Online store PWA sample.
 *  Copyright 2017 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
export default function initializeProducts() {
  firebase.database().ref('/products/').once('value').then((snapshot) => {
    populatePiesList(snapshot.val());
  });

  function populatePiesList(pies) {
    const pieList = document.querySelector('#pies');
    let i = 0;
    for (const pie in pies) {
      if (pieList.children[i]) {
        pieList.children[i].pie = pies[pie];
      } else {
        const pieNode = document.createElement('pie-item');
        pieNode.pie = pies[pie];
        pieNode.pieId = pie;
        pieList.appendChild(pieNode);
      }
      i++;
    }
  };
}
