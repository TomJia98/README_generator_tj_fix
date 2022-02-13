// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  switch(license) {
    case "Apache 2.0 License":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      return badge
      ;
    case "Boost Software License 1.0":
     badge = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
      return badge
      ;
    case "BSD 3-Clause License":
      badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
      return badge
      ;
    case "Eclipse Public License 1.0" :
      badge = "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
      return badge
      ;
    case "GNU GPL v3" :
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      return badge
      ;
    case "The Hippocratic License 2.1" :
      badge = "[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
      return badge
     ;
     case "IBM Public License Version 1.0":
       badge = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
       return badge
      ;
    case "ISC License (ISC)": 
    badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    return badge
    ;
    case "The MIT License":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      return badge 
    ;
    case "Mozilla Public License 2.0": 
    badge = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    return badge
   ;
   case "Public Domain Dedication and License (PDDL)":
     badge = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
     return badge
    ;
    case "The Artistic License 2.0":
      badge = "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
      return badge
    ;
    case "The Unlicense":
      badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      return badge
      ;
    case "The Do What the F**k You Want to Public License": 
    badge = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
    return badge
    ;
    case "N/A":
      return badge;
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let licenseLink = "";
switch (license){
  case "Apache 2.0 License":
    licenseLink = "https://opensource.org/licenses/Apache-2.0"
    return licenseLink
    ;
    case "Boost Software License 1.0":
      licenseLink = "https://www.boost.org/LICENSE_1_0.txt"
      return licenseLink
      ;
    case "BSD 3-Clause License":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause"
      return licenseLink
      ;
      case "Eclipse Public License 1.0" :   
      licenseLink = "https://opensource.org/licenses/EPL-1.0"
      return licenseLink
      ;
    case "GNU GPL v3" :
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0"
      return licenseLink
      ;
    case "The Hippocratic License 2.1":
      licenseLink = "https://firstdonoharm.dev"
      return licenseLink
      ;
    case "IBM Public License Version 1.0":
      licenseLink =  "https://opensource.org/licenses/IPL-1.0"
      return licenseLink
      ;
    case "ISC License (ISC)":
      licenseLink = "https://opensource.org/licenses/ISC"
      return licenseLink
      ;
    case "The MIT License":
      licenseLink = "https://opensource.org/licenses/MIT"
      return licenseLink
      ;
    case "Mozilla Public License 2.0":
      licenseLink = "https://opensource.org/licenses/MPL-2.0"
      return licenceLink
      ;
    case "Public Domain Dedication and License (PDDL)":
      licenseLink = "https://opendatacommons.org/licenses/pddl/"
      return licenseLink
      ;
   case "The Artistic License 2.0":
        licenseLink = "https://opensource.org/licenses/Artistic-2.0"
        return licenseLink
      ;
    case "The Unlicense": 
    licenseLink = "http://unlicense.org/"
    return licenseLink
    ;
    case "The Do What the F**k You Want to Public License":
      licenseLink = "http://www.wtfpl.net/about/"
      return licenseLink
      ;
      case "N/A":
        return licenseLink;
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";
switch (license){
  case "Apache 2.0 License":
    licenseText = 

    `Copyright <YEAR> <COPYRIGHT HOLDER>
    
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
 
      http://www.apache.org/licenses/LICENSE-2.0
 
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.`


    return licenseText
    ;
    case "Boost Software License 1.0":
      licenseText = 
      
      `Boost Software License - Version 1.0 - August 17th, 2003

      Permission is hereby granted, free of charge, to any person or organization
      obtaining a copy of the software and accompanying documentation covered by
      this license (the "Software") to use, reproduce, display, distribute,
      execute, and transmit the Software, and to prepare derivative works of the
      Software, and to permit third-parties to whom the Software is furnished to
      do so, all subject to the following:
      
      The copyright notices in the Software and this entire statement, including
      the above license grant, this restriction and the following disclaimer,
      must be included in all copies of the Software, in whole or in part, and
      all derivative works of the Software, unless such copies or derivative
      works are solely in the form of machine-executable object code generated by
      a source language processor.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
      SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
      FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
      DEALINGS IN THE SOFTWARE.`

      return licenseText
      ;
    case "BSD 3-Clause License":
      licenseText =
      
      `Copyright <YEAR> <COPYRIGHT HOLDER>

      Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
      
      1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
      
      2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
      
      3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
      
      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
`
      return licenseText
      ;
      case "Eclipse Public License 1.0" :   
      licenseText = 
      `
      Eclipse Public License, Version 1.0 (EPL-1.0)
THE ACCOMPANYING PROGRAM IS PROVIDED UNDER THE TERMS OF THIS ECLIPSE PUBLIC LICENSE ("AGREEMENT"). ANY USE, REPRODUCTION OR DISTRIBUTION OF THE PROGRAM CONSTITUTES RECIPIENT'S ACCEPTANCE OF THIS AGREEMENT.

1. DEFINITIONS

"Contribution" means:

a) in the case of the initial Contributor, the initial code and documentation distributed under this Agreement, and
b) in the case of each subsequent Contributor:
i) changes to the Program, and
ii) additions to the Program;
where such changes and/or additions to the Program originate from and are distributed by that particular Contributor. A Contribution 'originates' from a Contributor if it was added to the Program by such Contributor itself or anyone acting on such Contributor's behalf. Contributions do not include additions to the Program which: (i) are separate modules of software distributed in conjunction with the Program under their own license agreement, and (ii) are not derivative works of the Program.




 
 
 
"Contributor" means any person or entity that distributes the Program.

"Licensed Patents" mean patent claims licensable by a Contributor which are necessarily infringed by the use or sale of its Contribution alone or when combined with the Program.

"Program" means the Contributions distributed in accordance with this Agreement.

"Recipient" means anyone who receives the Program under this Agreement, including all Contributors.

2. GRANT OF RIGHTS

a) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, distribute and sublicense the Contribution of such Contributor, if any, and such derivative works, in source code and object code form.
b) Subject to the terms of this Agreement, each Contributor hereby grants Recipient a non-exclusive, worldwide, royalty-free patent license under Licensed Patents to make, use, sell, offer to sell, import and otherwise transfer the Contribution of such Contributor, if any, in source code and object code form. This patent license shall apply to the combination of the Contribution and the Program if, at the time the Contribution is added by the Contributor, such addition of the Contribution causes such combination to be covered by the Licensed Patents. The patent license shall not apply to any other combinations which include the Contribution. No hardware per se is licensed hereunder.
c) Recipient understands that although each Contributor grants the licenses to its Contributions set forth herein, no assurances are provided by any Contributor that the Program does not infringe the patent or other intellectual property rights of any other entity. Each Contributor disclaims any liability to Recipient for claims brought by any other entity based on infringement of intellectual property rights or otherwise. As a condition to exercising the rights and licenses granted hereunder, each Recipient hereby assumes sole responsibility to secure any other intellectual property rights needed, if any. For example, if a third party patent license is required to allow Recipient to distribute the Program, it is Recipient's responsibility to acquire that license before distributing the Program.
d) Each Contributor represents that to its knowledge it has sufficient copyright rights in its Contribution, if any, to grant the copyright license set forth in this Agreement.




 
 
 
3. REQUIREMENTS

A Contributor may choose to distribute the Program in object code form under its own license agreement, provided that:

a) it complies with the terms and conditions of this Agreement; and
b) its license agreement:
i) effectively disclaims on behalf of all Contributors all warranties and conditions, express and implied, including warranties or conditions of title and non-infringement, and implied warranties or conditions of merchantability and fitness for a particular purpose;
ii) effectively excludes on behalf of all Contributors all liability for damages, including direct, indirect, special, incidental and consequential damages, such as lost profits;
iii) states that any provisions which differ from this Agreement are offered by that Contributor alone and not by any other party; and
iv) states that source code for the Program is available from such Contributor, and informs licensees how to obtain it in a reasonable manner on or through a medium customarily used for software exchange.




 
 
 
When the Program is made available in source code form:

a) it must be made available under this Agreement; and
b) a copy of this Agreement must be included with each copy of the Program.




 
 
 
Contributors may not remove or alter any copyright notices contained within the Program.

Each Contributor must identify itself as the originator of its Contribution, if any, in a manner that reasonably allows subsequent Recipients to identify the originator of the Contribution.

4. COMMERCIAL DISTRIBUTION

Commercial distributors of software may accept certain responsibilities with respect to end users, business partners and the like. While this license is intended to facilitate the commercial use of the Program, the Contributor who includes the Program in a commercial product offering should do so in a manner which does not create potential liability for other Contributors. Therefore, if a Contributor includes the Program in a commercial product offering, such Contributor ("Commercial Contributor") hereby agrees to defend and indemnify every other Contributor ("Indemnified Contributor") against any losses, damages and costs (collectively "Losses") arising from claims, lawsuits and other legal actions brought by a third party against the Indemnified Contributor to the extent caused by the acts or omissions of such Commercial Contributor in connection with its distribution of the Program in a commercial product offering. The obligations in this section do not apply to any claims or Losses relating to any actual or alleged intellectual property infringement. In order to qualify, an Indemnified Contributor must: a) promptly notify the Commercial Contributor in writing of such claim, and b) allow the Commercial Contributor to control, and cooperate with the Commercial Contributor in, the defense and any related settlement negotiations. The Indemnified Contributor may participate in any such claim at its own expense.

For example, a Contributor might include the Program in a commercial product offering, Product X. That Contributor is then a Commercial Contributor. If that Commercial Contributor then makes performance claims, or offers warranties related to Product X, those performance claims and warranties are such Commercial Contributor's responsibility alone. Under this section, the Commercial Contributor would have to defend claims against the other Contributors related to those performance claims and warranties, and if a court requires any other Contributor to pay any damages as a result, the Commercial Contributor must pay those damages.

5. NO WARRANTY

EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, THE PROGRAM IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED INCLUDING, WITHOUT LIMITATION, ANY WARRANTIES OR CONDITIONS OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Each Recipient is solely responsible for determining the appropriateness of using and distributing the Program and assumes all risks associated with its exercise of rights under this Agreement , including but not limited to the risks and costs of program errors, compliance with applicable laws, damage to or loss of data, programs or equipment, and unavailability or interruption of operations.

6. DISCLAIMER OF LIABILITY

EXCEPT AS EXPRESSLY SET FORTH IN THIS AGREEMENT, NEITHER RECIPIENT NOR ANY CONTRIBUTORS SHALL HAVE ANY LIABILITY FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING WITHOUT LIMITATION LOST PROFITS), HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OR DISTRIBUTION OF THE PROGRAM OR THE EXERCISE OF ANY RIGHTS GRANTED HEREUNDER, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

7. GENERAL

If any provision of this Agreement is invalid or unenforceable under applicable law, it shall not affect the validity or enforceability of the remainder of the terms of this Agreement, and without further action by the parties hereto, such provision shall be reformed to the minimum extent necessary to make such provision valid and enforceable.

If Recipient institutes patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Program itself (excluding combinations of the Program with other software or hardware) infringes such Recipient's patent(s), then such Recipient's rights granted under Section 2(b) shall terminate as of the date such litigation is filed.

All Recipient's rights under this Agreement shall terminate if it fails to comply with any of the material terms or conditions of this Agreement and does not cure such failure in a reasonable period of time after becoming aware of such noncompliance. If all Recipient's rights under this Agreement terminate, Recipient agrees to cease use and distribution of the Program as soon as reasonably practicable. However, Recipient's obligations under this Agreement and any licenses granted by Recipient relating to the Program shall continue and survive.

Everyone is permitted to copy and distribute copies of this Agreement, but in order to avoid inconsistency the Agreement is copyrighted and may only be modified in the following manner. The Agreement Steward reserves the right to publish new versions (including revisions) of this Agreement from time to time. No one other than the Agreement Steward has the right to modify this Agreement. The Eclipse Foundation is the initial Agreement Steward. The Eclipse Foundation may assign the responsibility to serve as the Agreement Steward to a suitable separate entity. Each new version of the Agreement will be given a distinguishing version number. The Program (including Contributions) may always be distributed subject to the version of the Agreement under which it was received. In addition, after a new version of the Agreement is published, Contributor may elect to distribute the Program (including its Contributions) under the new version. Except as expressly stated in Sections 2(a) and 2(b) above, Recipient receives no rights or licenses to the intellectual property of any Contributor under this Agreement, whether expressly, by implication, estoppel or otherwise. All rights in the Program not expressly granted under this Agreement are reserved.

This Agreement is governed by the laws of the State of New York and the intellectual property laws of the United States of America. No party to this Agreement will bring a legal action under this Agreement more than one year after the cause of action arose. Each party waives its rights to a jury trial in any resulting litigation.
`
      return licenseText
      ;
    case "GNU GPL v3" :
      licenseText = 
      
      ` Copyright (C) <year>  <name of author>

      This program is free software: you can redistribute it and/or modify
      it under the terms of the GNU General Public License as published by
      the Free Software Foundation, either version 3 of the License, or
      (at your option) any later version.
  
      This program is distributed in the hope that it will be useful,
      but WITHOUT ANY WARRANTY; without even the implied warranty of
      MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
      GNU General Public License for more details.
  
      You should have received a copy of the GNU General Public License
      along with this program.  If not, see <https://www.gnu.org/licenses/>.`

      return licenseText
      ;
    case "The Hippocratic License 2.1":
      licenseText = 
      
      `[SOFTWARE NAME] Copyright (YEAR) (COPYRIGHT HOLDER(S)/AUTHOR(S))(“Licensor”)

      Hippocratic License Version Number: 2.1.
      
      Purpose. The purpose of this License is for the Licensor named above to permit the Licensee (as defined below) broad permission, if consistent with Human Rights Laws and Human Rights Principles (as each is defined below), to use and work with the Software (as defined below) within the full scope of Licensor’s copyright and patent rights, if any, in the Software, while ensuring attribution and protecting the Licensor from liability.
      
      Permission and Conditions. The Licensor grants permission by this license (“License”), free of charge, to the extent of Licensor’s rights under applicable copyright and patent law, to any person or entity (the “Licensee”) obtaining a copy of this software and associated documentation files (the “Software”), to do everything with the Software that would otherwise infringe (i) the Licensor’s copyright in the Software or (ii) any patent claims to the Software that the Licensor can license or becomes able to license, subject to all of the following terms and conditions:
      
      * Acceptance. This License is automatically offered to every person and entity subject to its terms and conditions. Licensee accepts this License and agrees to its terms and conditions by taking any action with the Software that, absent this License, would infringe any intellectual property right held by Licensor.
      
      * Notice. Licensee must ensure that everyone who gets a copy of any part of this Software from Licensee, with or without changes, also receives the License and the above copyright notice (and if included by the Licensor, patent, trademark and attribution notice). Licensee must cause any modified versions of the Software to carry prominent notices stating that Licensee changed the Software. For clarity, although Licensee is free to create modifications of the Software and distribute only the modified portion created by Licensee with additional or different terms, the portion of the Software not modified must be distributed pursuant to this License. If anyone notifies Licensee in writing that Licensee has not complied with this Notice section, Licensee can keep this License by taking all practical steps to comply within 30 days after the notice. If Licensee does not do so, Licensee’s License (and all rights licensed hereunder) shall end immediately.
      
      * Compliance with Human Rights Principles and Human Rights Laws.
      
          1. Human Rights Principles.
      
              (a) Licensee is advised to consult the articles of the United Nations Universal Declaration of Human Rights and the United Nations Global Compact that define recognized principles of international human rights (the “Human Rights Principles”). Licensee shall use the Software in a manner consistent with Human Rights Principles.
      
              (b) Unless the Licensor and Licensee agree otherwise, any dispute, controversy, or claim arising out of or relating to (i) Section 1(a) regarding Human Rights Principles, including the breach of Section 1(a), termination of this License for breach of the Human Rights Principles, or invalidity of Section 1(a) or (ii) a determination of whether any Law is consistent or in conflict with Human Rights Principles pursuant to Section 2, below, shall be settled by arbitration in accordance with the Hague Rules on Business and Human Rights Arbitration (the “Rules”); provided, however, that Licensee may elect not to participate in such arbitration, in which event this License (and all rights licensed hereunder) shall end immediately. The number of arbitrators shall be one unless the Rules require otherwise.
      
              Unless both the Licensor and Licensee agree to the contrary: (1) All documents and information concerning the arbitration shall be public and may be disclosed by any party; (2) The repository referred to under Article 43 of the Rules shall make available to the public in a timely manner all documents concerning the arbitration which are communicated to it, including all submissions of the parties, all evidence admitted into the record of the proceedings, all transcripts or other recordings of hearings and all orders, decisions and awards of the arbitral tribunal, subject only to the arbitral tribunal's powers to take such measures as may be necessary to safeguard the integrity of the arbitral process pursuant to Articles 18, 33, 41 and 42 of the Rules; and (3) Article 26(6) of the Rules shall not apply.
      
          2. Human Rights Laws. The Software shall not be used by any person or entity for any systems, activities, or other uses that violate any Human Rights Laws.  “Human Rights Laws” means any applicable laws, regulations, or rules (collectively, “Laws”) that protect human, civil, labor, privacy, political, environmental, security, economic, due process, or similar rights; provided, however, that such Laws are consistent and not in conflict with Human Rights Principles (a dispute over the consistency or a conflict between Laws and Human Rights Principles shall be determined by arbitration as stated above).  Where the Human Rights Laws of more than one jurisdiction are applicable or in conflict with respect to the use of the Software, the Human Rights Laws that are most protective of the individuals or groups harmed shall apply.
      
          3. Indemnity. Licensee shall hold harmless and indemnify Licensor (and any other contributor) against all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including Licensor’s reasonable attorneys’ fees, arising out of or relating to Licensee’s use of the Software in violation of Human Rights Laws or Human Rights Principles.
      
      * Failure to Comply. Any failure of Licensee to act according to the terms and conditions of this License is both a breach of the License and an infringement of the intellectual property rights of the Licensor (subject to exceptions under Laws, e.g., fair use). In the event of a breach or infringement, the terms and conditions of this License may be enforced by Licensor under the Laws of any jurisdiction to which Licensee is subject. Licensee also agrees that the Licensor may enforce the terms and conditions of this License against Licensee through specific performance (or similar remedy under Laws) to the extent permitted by Laws. For clarity, except in the event of a breach of this License, infringement, or as otherwise stated in this License, Licensor may not terminate this License with Licensee.
      
      * Enforceability and Interpretation. If any term or provision of this License is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, then such invalidity, illegality, or unenforceability shall not affect any other term or provision of this License or invalidate or render unenforceable such term or provision in any other jurisdiction; provided, however, subject to a court modification pursuant to the immediately following sentence, if any term or provision of this License pertaining to Human Rights Laws or Human Rights Principles is deemed invalid, illegal, or unenforceable against Licensee by a court of competent jurisdiction, all rights in the Software granted to Licensee shall be deemed null and void as between Licensor and Licensee. Upon a determination that any term or provision is invalid, illegal, or unenforceable, to the extent permitted by Laws, the court may modify this License to affect the original purpose that the Software be used in compliance with Human Rights Principles and Human Rights Laws as closely as possible. The language in this License shall be interpreted as to its fair meaning and not strictly for or against any party.
      
      * Disclaimer. TO THE FULL EXTENT ALLOWED BY LAW, THIS SOFTWARE COMES “AS IS,” WITHOUT ANY WARRANTY, EXPRESS OR IMPLIED, AND LICENSOR AND ANY OTHER CONTRIBUTOR SHALL NOT BE LIABLE TO ANYONE FOR ANY DAMAGES OR OTHER LIABILITY ARISING FROM, OUT OF, OR IN CONNECTION WITH THE SOFTWARE OR THIS LICENSE, UNDER ANY KIND OF LEGAL CLAIM.
      
      This Hippocratic License is an Ethical Source license (https://ethicalsource.dev) and is offered for use by licensors and licensees at their own risk, on an “AS IS” basis, and with no warranties express or implied, to the maximum extent permitted by Laws.
      `

      return licenseText
      ;
    case "IBM Public License Version 1.0":
      licenseText =  
      `Copyright (C) 1996, 1999 International Business Machines Corporation and others. All Rights Reserved.`
      return licenseText
      ;
    case "ISC License (ISC)":
      licenseText = 
      
      `Copyright <YEAR> <OWNER>

      Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
      
      THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`

      return licenseText
      ;
    case "The MIT License":
      licenseText = 
      
      `Copyright <YEAR> <COPYRIGHT HOLDER>

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
      return licenseText
      ;
    case "Mozilla Public License 2.0":
      licenseText = 
      `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`
      return licenseText
      ;
    case "Public Domain Dedication and License (PDDL)":
      licenseText = 
      
      `This {DATA(BASE)} is made available under the Public Domain Dedication and License v1.0 whose full text can be found at: http://opendatacommons.org/licenses/pddl/1.0/`
      return licenseText
      ;
   case "The Artistic License 2.0":
        licenseText = 
        
        `Copyright (c) 2000-2006, The Perl Foundation.

        Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
        
        Preamble
        This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.
        
        You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.
        
        Definitions
        "Copyright Holder" means the individual(s) or organization(s) named in the copyright notice for the entire Package.
        
        "Contributor" means any party that has contributed code or other material to the Package, in accordance with the Copyright Holder's procedures.
        
        "You" and "your" means any person who would like to copy, distribute, or modify the Package.
        
        "Package" means the collection of files distributed by the Copyright Holder, and derivatives of that collection and/or of those files. A given Package may consist of either the Standard Version, or a Modified Version.
        
        "Distribute" means providing a copy of the Package or making it accessible to anyone else, or in the case of a company or organization, to others outside of your company or organization.
        
        "Distributor Fee" means any fee that you charge for Distributing this Package or providing support for this Package to another party. It does not mean licensing fees.
        
        "Standard Version" refers to the Package if it has not been modified, or has been modified only in ways explicitly requested by the Copyright Holder.
        
        "Modified Version" means the Package, if it has been changed, and such changes were not explicitly requested by the Copyright Holder.
        
        "Original License" means this Artistic License as Distributed with the Standard Version of the Package, in its current version or as it may be modified by The Perl Foundation in the future.
        
        "Source" form means the source code, documentation source, and configuration files for the Package.
        
        "Compiled" form means the compiled bytecode, object code, binary, or any other form resulting from mechanical transformation or translation of the Source form.
        
        Permission for Use and Modification Without Distribution
        (1) You are permitted to use the Standard Version and create and use Modified Versions for any purpose without restriction, provided that you do not Distribute the Modified Version.
        
        Permissions for Redistribution of the Standard Version
        (2) You may Distribute verbatim copies of the Source form of the Standard Version of this Package in any medium without restriction, either gratis or for a Distributor Fee, provided that you duplicate all of the original copyright notices and associated disclaimers. At your discretion, such verbatim copies may or may not include a Compiled form of the Package.
        
        (3) You may apply any bug fixes, portability changes, and other modifications made available from the Copyright Holder. The resulting Package will still be considered the Standard Version, and as such will be subject to the Original License.
        
        Distribution of Modified Versions of the Package as Source
        (4) You may Distribute your Modified Version as Source (either gratis or for a Distributor Fee, and with or without a Compiled form of the Modified Version) provided that you clearly document how it differs from the Standard Version, including, but not limited to, documenting any non-standard features, executables, or modules, and provided that you do at least ONE of the following:
        
        (a) make the Modified Version available to the Copyright Holder of the Standard Version, under the Original License, so that the Copyright Holder may include your modifications in the Standard Version.
        (b) ensure that installation of your Modified Version does not prevent the user installing or running the Standard Version. In addition, the Modified Version must bear a name that is different from the name of the Standard Version.
        (c) allow anyone who receives a copy of the Modified Version to make the Source form of the Modified Version available to others under
        (i) the Original License or
        (ii) a license that permits the licensee to freely copy, modify and redistribute the Modified Version using the same licensing terms that apply to the copy that the licensee received, and requires that the Source form of the Modified Version, and of any works derived from it, be made freely available in that license fees are prohibited but Distributor Fees are allowed.
        
        Distribution of Compiled Forms of the Standard Version or Modified Versions without the Source
        (5) You may Distribute Compiled forms of the Standard Version without the Source, provided that you include complete instructions on how to get the Source of the Standard Version. Such instructions must be valid at the time of your distribution. If these instructions, at any time while you are carrying out such distribution, become invalid, you must provide new instructions on demand or cease further distribution. If you provide valid instructions or cease distribution within thirty days after you become aware that the instructions are invalid, then you do not forfeit any of your rights under this license.
        
        (6) You may Distribute a Modified Version in Compiled form without the Source, provided that you comply with Section 4 with respect to the Source of the Modified Version.
        
        Aggregating or Linking the Package
        (7) You may aggregate the Package (either the Standard Version or Modified Version) with other packages and Distribute the resulting aggregation provided that you do not charge a licensing fee for the Package. Distributor Fees are permitted, and licensing fees for other components in the aggregation are permitted. The terms of this license apply to the use and Distribution of the Standard or Modified Versions as included in the aggregation.
        
        (8) You are permitted to link Modified and Standard Versions with other works, to embed the Package in a larger work of your own, or to build stand-alone binary or bytecode versions of applications that include the Package, and Distribute the result without restriction, provided the result does not expose a direct interface to the Package.
        
        Items That are Not Considered Part of a Modified Version
        (9) Works (including, but not limited to, modules and scripts) that merely extend or make use of the Package, do not, by themselves, cause the Package to be a Modified Version. In addition, such works are not considered parts of the Package itself, and are not subject to the terms of this license.
        
        General Provisions
        (10) Any use, modification, and distribution of the Standard or Modified Versions is governed by this Artistic License. By using, modifying or distributing the Package, you accept this license. Do not use, modify, or distribute the Package, if you do not accept this license.
        
        (11) If your Modified Version has been derived from a Modified Version made by someone other than you, you are nevertheless required to ensure that your Modified Version complies with the requirements of this license.
        
        (12) This license does not grant you the right to use any trademark, service mark, tradename, or logo of the Copyright Holder.
        
        (13) This license includes the non-exclusive, worldwide, free-of-charge patent license to make, have made, use, offer to sell, sell, import and otherwise transfer the Package with respect to any patent claims licensable by the Copyright Holder that are necessarily infringed by the Package. If you institute patent litigation (including a cross-claim or counterclaim) against any party alleging that the Package constitutes direct or contributory patent infringement, then this Artistic License to you shall terminate on the date that such litigation is filed.
        
        (14) Disclaimer of Warranty: THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`

        return licenseText
      ;
    case "The Unlicense": 
    licenseText = 
    
    `This is free and unencumbered software released into the public domain.

    Anyone is free to copy, modify, publish, use, compile, sell, or
    distribute this software, either in source code form or as a compiled
    binary, for any purpose, commercial or non-commercial, and by any
    means.
    
    In jurisdictions that recognize copyright laws, the author or authors
    of this software dedicate any and all copyright interest in the
    software to the public domain. We make this dedication for the benefit
    of the public at large and to the detriment of our heirs and
    successors. We intend this dedication to be an overt act of
    relinquishment in perpetuity of all present and future rights to this
    software under copyright law.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
    IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
    OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
    ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
    
    For more information, please refer to <http://unlicense.org/>`
    return licenseText
    ;
    case "The Do What the F**k You Want to Public License":
      licenseText = 

      `    DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
      Version 2, December 2004 

Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

0. You just DO WHAT THE FUCK YOU WANT TO.`
      return licenseText
      ;
      case "N/A":
        licenseText = ""
        return licenseText;
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  ${renderLicenseBadge(data.projectLicense)}

  ## Description

  ${data.projectDesc}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licence](#licence)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.projectInstall}

  ## Usage

  ${data.projectUsage}

  ## Licence

  ${renderLicenseSection(data.projectLicense)}

  ## Contribution

  ${data.projectContribute}

  ## Tests

  ${data.projectTest}

  ## Questions

  Visit my Github at
  https://github.com/${data.projectQuestionsGithub}

  For any more questions, feel free to contact me at ${data.projectQuestionsEmail}
  `;
}


module.exports = {generateMarkdown}
