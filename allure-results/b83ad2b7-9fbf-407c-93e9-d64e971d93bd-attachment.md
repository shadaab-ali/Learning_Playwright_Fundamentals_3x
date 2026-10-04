# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts >> OrangeHRM - add and delete employee
- Location: tests\07_WebTables\250_WebTable_ORGHRM_Assignment.spec.ts:3:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('//div[contains(@class,\'oxd-table-row\')][.//div[contains(@class,\'oxd-table-cell\') and contains(.,\'Maddy1\')]]')
Expected: 1
Received: 0
Timeout:  5000ms

Call log:
  - Expect "toHaveCount" locator('//div[contains(@class,\'oxd-table-row\')][.//div[contains(@class,\'oxd-table-cell\') and contains(.,\'Maddy1\')]]') with timeout 5000ms
  - waiting for locator('//div[contains(@class,\'oxd-table-row\')][.//div[contains(@class,\'oxd-table-cell\') and contains(.,\'Maddy1\')]]')
    14 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e114]
        - link [ref=f5e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e117] [cursor=pointer]
        - list [ref=f5e123]:
          - listitem [ref=f5e124]:
            - generic [ref=f5e125] [cursor=pointer]:
              - img "profile picture" [ref=f5e126]
              - paragraph [ref=f5e127]: Test s
              - generic [ref=f5e128]: 
      - navigation "Topbar Menu" [ref=f5e130]:
        - list [ref=f5e131]:
          - listitem [ref=f5e132] [cursor=pointer]:
            - generic [ref=f5e133]:
              - text: Configuration
              - generic [ref=f5e134]: 
          - listitem [ref=f5e135] [cursor=pointer]:
            - link "Employee List" [ref=f5e136]:
              - /url: "#"
          - listitem [ref=f5e137] [cursor=pointer]:
            - link "Add Employee" [ref=f5e138]:
              - /url: "#"
          - listitem [ref=f5e139] [cursor=pointer]:
            - link "Reports" [ref=f5e140]:
              - /url: "#"
          - button "" [ref=f5e142] [cursor=pointer]
  - generic [ref=f5e144]:
    - generic [ref=f5e146]:
      - generic [ref=f5e147]:
        - generic [ref=f5e148]:
          - heading "Employee Information" [level=5] [ref=f5e150]
          - button "" [ref=f5e153] [cursor=pointer]
        - separator [ref=f5e155]
        - generic [ref=f5e157]:
          - generic [ref=f5e159]:
            - generic [ref=f5e161]:
              - generic [ref=f5e162]: Employee Name
              - textbox "Type for hints..." [ref=f5e167]
            - generic [ref=f5e169]:
              - generic [ref=f5e170]: Employee Id
              - textbox [ref=f5e173]
            - generic [ref=f5e175]:
              - generic [ref=f5e176]: Employment Status
              - generic [ref=f5e180] [cursor=pointer]:
                - generic [ref=f5e181]: "-- Select --"
                - generic [ref=f5e182]: 
            - generic [ref=f5e185]:
              - generic [ref=f5e186]: Include
              - generic [ref=f5e190] [cursor=pointer]:
                - generic [ref=f5e191]: Current Employees Only
                - generic [ref=f5e192]: 
            - generic [ref=f5e195]:
              - generic [ref=f5e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e201]
            - generic [ref=f5e203]:
              - generic [ref=f5e204]: Job Title
              - generic [ref=f5e208] [cursor=pointer]:
                - generic [ref=f5e209]: "-- Select --"
                - generic [ref=f5e210]: 
            - generic [ref=f5e213]:
              - generic [ref=f5e214]: Sub Unit
              - generic [ref=f5e218] [cursor=pointer]:
                - generic [ref=f5e219]: "-- Select --"
                - generic [ref=f5e220]: 
          - separator [ref=f5e222]
          - generic [ref=f5e223]:
            - button "Reset" [ref=f5e224] [cursor=pointer]
            - button "Search" [ref=f5e225] [cursor=pointer]
      - generic [ref=f5e226]:
        - button " Add" [ref=f5e228] [cursor=pointer]:
          - generic [ref=f5e229]: 
          - text: Add
        - generic [ref=f5e230]:
          - separator [ref=f5e231]
          - generic [ref=f5e232]: (285) Records Found
        - table [ref=f5e235]:
          - rowgroup [ref=f5e236]:
            - row [ref=f5e237]:
              - columnheader "" [ref=f5e238]:
                - generic [ref=f5e240] [cursor=pointer]:
                  - checkbox "" [ref=f5e241]
                  - generic [ref=f5e242]: 
              - columnheader "Id " [ref=f5e244]:
                - text: Id
                - generic [ref=f5e245]:
                  - generic [ref=f5e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e247]:
                - text: First (& Middle) Name
                - generic [ref=f5e248]:
                  - generic [ref=f5e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e250]:
                - text: Last Name
                - generic [ref=f5e251]:
                  - generic [ref=f5e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e253]:
                - text: Job Title
                - generic [ref=f5e254]:
                  - generic [ref=f5e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e256]:
                - text: Employment Status
                - generic [ref=f5e257]:
                  - generic [ref=f5e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e259]:
                - text: Sub Unit
                - generic [ref=f5e260]:
                  - generic [ref=f5e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e262]:
                - text: Supervisor
                - generic [ref=f5e263]:
                  - generic [ref=f5e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e265]
          - rowgroup [ref=f5e266]:
            - row [ref=f5e268] [cursor=pointer]:
              - cell "" [ref=f5e269]:
                - generic [ref=f5e272]:
                  - checkbox "" [ref=f5e273]
                  - generic [ref=f5e274]: 
              - cell "dfgsjsjdh" [ref=f5e276]
              - cell "123445 34" [ref=f5e278]
              - cell "444444" [ref=f5e280]
              - cell [ref=f5e282]
              - cell [ref=f5e283]
              - cell [ref=f5e284]
              - cell [ref=f5e285]
              - cell [ref=f5e286]:
                - generic [ref=f5e287]:
                  - button "" [ref=f5e288]
                  - button "" [ref=f5e290]
            - row [ref=f5e293] [cursor=pointer]:
              - cell "" [ref=f5e294]:
                - generic [ref=f5e297]:
                  - checkbox "" [ref=f5e298]
                  - generic [ref=f5e299]: 
              - cell "0295" [ref=f5e301]
              - cell "99N75 425" [ref=f5e303]
              - cell "5TlV" [ref=f5e305]
              - cell [ref=f5e307]
              - cell [ref=f5e308]
              - cell [ref=f5e309]
              - cell [ref=f5e310]
              - cell [ref=f5e311]:
                - generic [ref=f5e312]:
                  - button "" [ref=f5e313]
                  - button "" [ref=f5e315]
            - row [ref=f5e318] [cursor=pointer]:
              - cell "" [ref=f5e319]:
                - generic [ref=f5e322]:
                  - checkbox "" [ref=f5e323]
                  - generic [ref=f5e324]: 
              - cell "0312" [ref=f5e326]
              - cell "A8DCo 4Ys" [ref=f5e328]
              - cell "010Z" [ref=f5e330]
              - cell [ref=f5e332]
              - cell [ref=f5e333]
              - cell [ref=f5e334]
              - cell [ref=f5e335]
              - cell [ref=f5e336]:
                - generic [ref=f5e337]:
                  - button "" [ref=f5e338]
                  - button "" [ref=f5e340]
            - row [ref=f5e343] [cursor=pointer]:
              - cell "" [ref=f5e344]:
                - generic [ref=f5e347]:
                  - checkbox "" [ref=f5e348]
                  - generic [ref=f5e349]: 
              - cell "01715" [ref=f5e351]
              - cell "Amelia" [ref=f5e353]
              - cell "Brown" [ref=f5e355]
              - cell [ref=f5e357]
              - cell [ref=f5e358]
              - cell [ref=f5e359]
              - cell [ref=f5e360]
              - cell [ref=f5e361]:
                - generic [ref=f5e362]:
                  - button "" [ref=f5e363]
                  - button "" [ref=f5e365]
            - row [ref=f5e368] [cursor=pointer]:
              - cell "" [ref=f5e369]:
                - generic [ref=f5e372]:
                  - checkbox "" [ref=f5e373]
                  - generic [ref=f5e374]: 
              - cell "0360" [ref=f5e376]
              - cell "aniket t" [ref=f5e378]
              - cell "t" [ref=f5e380]
              - cell [ref=f5e382]
              - cell [ref=f5e383]
              - cell [ref=f5e384]
              - cell [ref=f5e385]
              - cell [ref=f5e386]:
                - generic [ref=f5e387]:
                  - button "" [ref=f5e388]
                  - button "" [ref=f5e390]
            - row [ref=f5e393] [cursor=pointer]:
              - cell "" [ref=f5e394]:
                - generic [ref=f5e397]:
                  - checkbox "" [ref=f5e398]
                  - generic [ref=f5e399]: 
              - cell "610" [ref=f5e401]
              - cell "aniket Ashok" [ref=f5e403]
              - cell "patil" [ref=f5e405]
              - cell [ref=f5e407]
              - cell [ref=f5e408]
              - cell [ref=f5e409]
              - cell [ref=f5e410]
              - cell [ref=f5e411]:
                - generic [ref=f5e412]:
                  - button "" [ref=f5e413]
                  - button "" [ref=f5e415]
            - row [ref=f5e418] [cursor=pointer]:
              - cell "" [ref=f5e419]:
                - generic [ref=f5e422]:
                  - checkbox "" [ref=f5e423]
                  - generic [ref=f5e424]: 
              - cell "642" [ref=f5e426]
              - cell "aniket Ashok" [ref=f5e428]
              - cell "patil" [ref=f5e430]
              - cell [ref=f5e432]
              - cell [ref=f5e433]
              - cell [ref=f5e434]
              - cell [ref=f5e435]
              - cell [ref=f5e436]:
                - generic [ref=f5e437]:
                  - button "" [ref=f5e438]
                  - button "" [ref=f5e440]
            - row [ref=f5e443] [cursor=pointer]:
              - cell "" [ref=f5e444]:
                - generic [ref=f5e447]:
                  - checkbox "" [ref=f5e448]
                  - generic [ref=f5e449]: 
              - cell [ref=f5e451]
              - cell "API" [ref=f5e452]
              - cell "TestEmployee" [ref=f5e454]
              - cell [ref=f5e456]
              - cell [ref=f5e457]
              - cell [ref=f5e458]
              - cell [ref=f5e459]
              - cell [ref=f5e460]:
                - generic [ref=f5e461]:
                  - button "" [ref=f5e462]
                  - button "" [ref=f5e464]
            - row [ref=f5e467] [cursor=pointer]:
              - cell "" [ref=f5e468]:
                - generic [ref=f5e471]:
                  - checkbox "" [ref=f5e472]
                  - generic [ref=f5e473]: 
              - cell "0381" [ref=f5e475]
              - cell "Ash M" [ref=f5e477]
              - cell "Dup" [ref=f5e479]
              - cell [ref=f5e481]
              - cell [ref=f5e482]
              - cell [ref=f5e483]
              - cell [ref=f5e484]
              - cell [ref=f5e485]:
                - generic [ref=f5e486]:
                  - button "" [ref=f5e487]
                  - button "" [ref=f5e489]
            - row [ref=f5e492] [cursor=pointer]:
              - cell "" [ref=f5e493]:
                - generic [ref=f5e496]:
                  - checkbox "" [ref=f5e497]
                  - generic [ref=f5e498]: 
              - cell "0367" [ref=f5e500]
              - cell "Ash J" [ref=f5e502]
              - cell "Tyson" [ref=f5e504]
              - cell [ref=f5e506]
              - cell [ref=f5e507]
              - cell [ref=f5e508]
              - cell [ref=f5e509]
              - cell [ref=f5e510]:
                - generic [ref=f5e511]:
                  - button "" [ref=f5e512]
                  - button "" [ref=f5e514]
            - row [ref=f5e517] [cursor=pointer]:
              - cell "" [ref=f5e518]:
                - generic [ref=f5e521]:
                  - checkbox "" [ref=f5e522]
                  - generic [ref=f5e523]: 
              - cell "0482" [ref=f5e525]
              - cell "Auto170601031 PoC" [ref=f5e527]
              - cell "User5328" [ref=f5e529]
              - cell [ref=f5e531]
              - cell [ref=f5e532]
              - cell [ref=f5e533]
              - cell [ref=f5e534]
              - cell [ref=f5e535]:
                - generic [ref=f5e536]:
                  - button "" [ref=f5e537]
                  - button "" [ref=f5e539]
            - row [ref=f5e542] [cursor=pointer]:
              - cell "" [ref=f5e543]:
                - generic [ref=f5e546]:
                  - checkbox "" [ref=f5e547]
                  - generic [ref=f5e548]: 
              - cell "0483" [ref=f5e550]
              - cell "Auto170613361 PoC" [ref=f5e552]
              - cell "User8021" [ref=f5e554]
              - cell [ref=f5e556]
              - cell [ref=f5e557]
              - cell [ref=f5e558]
              - cell [ref=f5e559]
              - cell [ref=f5e560]:
                - generic [ref=f5e561]:
                  - button "" [ref=f5e562]
                  - button "" [ref=f5e564]
            - row [ref=f5e567] [cursor=pointer]:
              - cell "" [ref=f5e568]:
                - generic [ref=f5e571]:
                  - checkbox "" [ref=f5e572]
                  - generic [ref=f5e573]: 
              - cell "8888" [ref=f5e575]
              - cell "ayas" [ref=f5e577]
              - cell "sal" [ref=f5e579]
              - cell "Chief Technical Officer" [ref=f5e581]
              - cell "Full-Time Contract" [ref=f5e583]
              - cell "Administration" [ref=f5e585]
              - cell [ref=f5e587]
              - cell [ref=f5e588]:
                - generic [ref=f5e589]:
                  - button "" [ref=f5e590]
                  - button "" [ref=f5e592]
            - row [ref=f5e595] [cursor=pointer]:
              - cell "" [ref=f5e596]:
                - generic [ref=f5e599]:
                  - checkbox "" [ref=f5e600]
                  - generic [ref=f5e601]: 
              - cell "7888316" [ref=f5e603]
              - cell "Ayman Weal" [ref=f5e605]
              - cell "Ali" [ref=f5e607]
              - cell [ref=f5e609]
              - cell [ref=f5e610]
              - cell [ref=f5e611]
              - cell [ref=f5e612]
              - cell [ref=f5e613]:
                - generic [ref=f5e614]:
                  - button "" [ref=f5e615]
                  - button "" [ref=f5e617]
            - row [ref=f5e620] [cursor=pointer]:
              - cell "" [ref=f5e621]:
                - generic [ref=f5e624]:
                  - checkbox "" [ref=f5e625]
                  - generic [ref=f5e626]: 
              - cell "1302217" [ref=f5e628]
              - cell "Ayman Weal" [ref=f5e630]
              - cell "Ali" [ref=f5e632]
              - cell [ref=f5e634]
              - cell [ref=f5e635]
              - cell [ref=f5e636]
              - cell [ref=f5e637]
              - cell [ref=f5e638]:
                - generic [ref=f5e639]:
                  - button "" [ref=f5e640]
                  - button "" [ref=f5e642]
            - row [ref=f5e645] [cursor=pointer]:
              - cell "" [ref=f5e646]:
                - generic [ref=f5e649]:
                  - checkbox "" [ref=f5e650]
                  - generic [ref=f5e651]: 
              - cell "4469485" [ref=f5e653]
              - cell "Ayman Weal" [ref=f5e655]
              - cell "Ali" [ref=f5e657]
              - cell [ref=f5e659]
              - cell [ref=f5e660]
              - cell [ref=f5e661]
              - cell [ref=f5e662]
              - cell [ref=f5e663]:
                - generic [ref=f5e664]:
                  - button "" [ref=f5e665]
                  - button "" [ref=f5e667]
            - row [ref=f5e670] [cursor=pointer]:
              - cell "" [ref=f5e671]:
                - generic [ref=f5e674]:
                  - checkbox "" [ref=f5e675]
                  - generic [ref=f5e676]: 
              - cell "0303" [ref=f5e678]
              - cell "bala kumar" [ref=f5e680]
              - cell "ravi" [ref=f5e682]
              - cell [ref=f5e684]
              - cell [ref=f5e685]
              - cell [ref=f5e686]
              - cell [ref=f5e687]
              - cell [ref=f5e688]:
                - generic [ref=f5e689]:
                  - button "" [ref=f5e690]
                  - button "" [ref=f5e692]
            - row [ref=f5e695] [cursor=pointer]:
              - cell "" [ref=f5e696]:
                - generic [ref=f5e699]:
                  - checkbox "" [ref=f5e700]
                  - generic [ref=f5e701]: 
              - cell "64293619" [ref=f5e703]
              - cell "Bill" [ref=f5e705]
              - cell "Doe" [ref=f5e707]
              - cell [ref=f5e709]
              - cell [ref=f5e710]
              - cell [ref=f5e711]
              - cell [ref=f5e712]
              - cell [ref=f5e713]:
                - generic [ref=f5e714]:
                  - button "" [ref=f5e715]
                  - button "" [ref=f5e717]
            - row [ref=f5e720] [cursor=pointer]:
              - cell "" [ref=f5e721]:
                - generic [ref=f5e724]:
                  - checkbox "" [ref=f5e725]
                  - generic [ref=f5e726]: 
              - cell "0292" [ref=f5e728]
              - cell "bmrtahvwhibmrtahvwhi" [ref=f5e730]
              - cell "hbfqkhjfqbhbfqkhjfqb" [ref=f5e732]
              - cell [ref=f5e734]
              - cell [ref=f5e735]
              - cell [ref=f5e736]
              - cell [ref=f5e737]
              - cell [ref=f5e738]:
                - generic [ref=f5e739]:
                  - button "" [ref=f5e740]
                  - button "" [ref=f5e742]
            - row [ref=f5e745] [cursor=pointer]:
              - cell "" [ref=f5e746]:
                - generic [ref=f5e749]:
                  - checkbox "" [ref=f5e750]
                  - generic [ref=f5e751]: 
              - cell "64293629" [ref=f5e753]
              - cell "Bob" [ref=f5e755]
              - cell "Doe" [ref=f5e757]
              - cell [ref=f5e759]
              - cell [ref=f5e760]
              - cell [ref=f5e761]
              - cell [ref=f5e762]
              - cell [ref=f5e763]:
                - generic [ref=f5e764]:
                  - button "" [ref=f5e765]
                  - button "" [ref=f5e767]
            - row [ref=f5e770] [cursor=pointer]:
              - cell "" [ref=f5e771]:
                - generic [ref=f5e774]:
                  - checkbox "" [ref=f5e775]
                  - generic [ref=f5e776]: 
              - cell "64293634" [ref=f5e778]
              - cell "Bob" [ref=f5e780]
              - cell "Connor" [ref=f5e782]
              - cell [ref=f5e784]
              - cell [ref=f5e785]
              - cell [ref=f5e786]
              - cell [ref=f5e787]
              - cell [ref=f5e788]:
                - generic [ref=f5e789]:
                  - button "" [ref=f5e790]
                  - button "" [ref=f5e792]
            - row [ref=f5e795] [cursor=pointer]:
              - cell "" [ref=f5e796]:
                - generic [ref=f5e799]:
                  - checkbox "" [ref=f5e800]
                  - generic [ref=f5e801]: 
              - cell "64293625" [ref=f5e803]
              - cell "Bob" [ref=f5e805]
              - cell "Morane" [ref=f5e807]
              - cell [ref=f5e809]
              - cell [ref=f5e810]
              - cell [ref=f5e811]
              - cell [ref=f5e812]
              - cell [ref=f5e813]:
                - generic [ref=f5e814]:
                  - button "" [ref=f5e815]
                  - button "" [ref=f5e817]
            - row [ref=f5e820] [cursor=pointer]:
              - cell "" [ref=f5e821]:
                - generic [ref=f5e824]:
                  - checkbox "" [ref=f5e825]
                  - generic [ref=f5e826]: 
              - cell "64293626" [ref=f5e828]
              - cell "Bob" [ref=f5e830]
              - cell "Done" [ref=f5e832]
              - cell "Chief Financial Officer" [ref=f5e834]
              - cell "Full-Time Probation" [ref=f5e836]
              - cell "TechOps" [ref=f5e838]
              - cell [ref=f5e840]
              - cell [ref=f5e841]:
                - generic [ref=f5e842]:
                  - button "" [ref=f5e843]
                  - button "" [ref=f5e845]
            - row [ref=f5e848] [cursor=pointer]:
              - cell "" [ref=f5e849]:
                - generic [ref=f5e852]:
                  - checkbox "" [ref=f5e853]
                  - generic [ref=f5e854]: 
              - cell "0320" [ref=f5e856]
              - cell "Charles" [ref=f5e858]
              - cell "Carter" [ref=f5e860]
              - cell [ref=f5e862]
              - cell [ref=f5e863]
              - cell [ref=f5e864]
              - cell [ref=f5e865]
              - cell [ref=f5e866]:
                - generic [ref=f5e867]:
                  - button "" [ref=f5e868]
                  - button "" [ref=f5e870]
            - row [ref=f5e873] [cursor=pointer]:
              - cell "" [ref=f5e874]:
                - generic [ref=f5e877]:
                  - checkbox "" [ref=f5e878]
                  - generic [ref=f5e879]: 
              - cell "00392" [ref=f5e881]
              - cell "Charlotte" [ref=f5e883]
              - cell "Smith" [ref=f5e885]
              - cell [ref=f5e887]
              - cell [ref=f5e888]
              - cell [ref=f5e889]
              - cell [ref=f5e890]
              - cell [ref=f5e891]:
                - generic [ref=f5e892]:
                  - button "" [ref=f5e893]
                  - button "" [ref=f5e895]
            - row [ref=f5e898] [cursor=pointer]:
              - cell "" [ref=f5e899]:
                - generic [ref=f5e902]:
                  - checkbox "" [ref=f5e903]
                  - generic [ref=f5e904]: 
              - cell "0363" [ref=f5e906]
              - cell "Christopher" [ref=f5e908]
              - cell "Mcmillan" [ref=f5e910]
              - cell [ref=f5e912]
              - cell [ref=f5e913]
              - cell [ref=f5e914]
              - cell [ref=f5e915]
              - cell [ref=f5e916]:
                - generic [ref=f5e917]:
                  - button "" [ref=f5e918]
                  - button "" [ref=f5e920]
            - row [ref=f5e923] [cursor=pointer]:
              - cell "" [ref=f5e924]:
                - generic [ref=f5e927]:
                  - checkbox "" [ref=f5e928]
                  - generic [ref=f5e929]: 
              - cell "0430" [ref=f5e931]
              - cell "DateProbe" [ref=f5e933]
              - cell "UniqueOct01Q7" [ref=f5e935]
              - cell [ref=f5e937]
              - cell [ref=f5e938]
              - cell [ref=f5e939]
              - cell [ref=f5e940]
              - cell [ref=f5e941]:
                - generic [ref=f5e942]:
                  - button "" [ref=f5e943]
                  - button "" [ref=f5e945]
            - row [ref=f5e948] [cursor=pointer]:
              - cell "" [ref=f5e949]:
                - generic [ref=f5e952]:
                  - checkbox "" [ref=f5e953]
                  - generic [ref=f5e954]: 
              - cell "0290" [ref=f5e956]
              - cell "dhbrukkuzldhbrukkuzl" [ref=f5e958]
              - cell "ibuvlwtfsfibuvlwtfsf" [ref=f5e960]
              - cell [ref=f5e962]
              - cell [ref=f5e963]
              - cell [ref=f5e964]
              - cell [ref=f5e965]
              - cell [ref=f5e966]:
                - generic [ref=f5e967]:
                  - button "" [ref=f5e968]
                  - button "" [ref=f5e970]
            - row [ref=f5e973] [cursor=pointer]:
              - cell "" [ref=f5e974]:
                - generic [ref=f5e977]:
                  - checkbox "" [ref=f5e978]
                  - generic [ref=f5e979]: 
              - cell "0294" [ref=f5e981]
              - cell "DHINA KARAN" [ref=f5e983]
              - cell "P" [ref=f5e985]
              - cell [ref=f5e987]
              - cell [ref=f5e988]
              - cell [ref=f5e989]
              - cell [ref=f5e990]
              - cell [ref=f5e991]:
                - generic [ref=f5e992]:
                  - button "" [ref=f5e993]
                  - button "" [ref=f5e995]
            - row [ref=f5e998] [cursor=pointer]:
              - cell "" [ref=f5e999]:
                - generic [ref=f5e1002]:
                  - checkbox "" [ref=f5e1003]
                  - generic [ref=f5e1004]: 
              - cell [ref=f5e1006]
              - cell "DIRow001Q7N4" [ref=f5e1007]
              - cell "RowCountFixture" [ref=f5e1009]
              - cell [ref=f5e1011]
              - cell [ref=f5e1012]
              - cell [ref=f5e1013]
              - cell [ref=f5e1014]
              - cell [ref=f5e1015]:
                - generic [ref=f5e1016]:
                  - button "" [ref=f5e1017]
                  - button "" [ref=f5e1019]
            - row [ref=f5e1022] [cursor=pointer]:
              - cell "" [ref=f5e1023]:
                - generic [ref=f5e1026]:
                  - checkbox "" [ref=f5e1027]
                  - generic [ref=f5e1028]: 
              - cell [ref=f5e1030]
              - cell "DIRow002Q7N4" [ref=f5e1031]
              - cell "RowCountFixture" [ref=f5e1033]
              - cell [ref=f5e1035]
              - cell [ref=f5e1036]
              - cell [ref=f5e1037]
              - cell [ref=f5e1038]
              - cell [ref=f5e1039]:
                - generic [ref=f5e1040]:
                  - button "" [ref=f5e1041]
                  - button "" [ref=f5e1043]
            - row [ref=f5e1046] [cursor=pointer]:
              - cell "" [ref=f5e1047]:
                - generic [ref=f5e1050]:
                  - checkbox "" [ref=f5e1051]
                  - generic [ref=f5e1052]: 
              - cell [ref=f5e1054]
              - cell "DIRow003Q7N4" [ref=f5e1055]
              - cell "RowCountFixture" [ref=f5e1057]
              - cell [ref=f5e1059]
              - cell [ref=f5e1060]
              - cell [ref=f5e1061]
              - cell [ref=f5e1062]
              - cell [ref=f5e1063]:
                - generic [ref=f5e1064]:
                  - button "" [ref=f5e1065]
                  - button "" [ref=f5e1067]
            - row [ref=f5e1070] [cursor=pointer]:
              - cell "" [ref=f5e1071]:
                - generic [ref=f5e1074]:
                  - checkbox "" [ref=f5e1075]
                  - generic [ref=f5e1076]: 
              - cell [ref=f5e1078]
              - cell "DIRow004Q7N4" [ref=f5e1079]
              - cell "RowCountFixture" [ref=f5e1081]
              - cell [ref=f5e1083]
              - cell [ref=f5e1084]
              - cell [ref=f5e1085]
              - cell [ref=f5e1086]
              - cell [ref=f5e1087]:
                - generic [ref=f5e1088]:
                  - button "" [ref=f5e1089]
                  - button "" [ref=f5e1091]
            - row [ref=f5e1094] [cursor=pointer]:
              - cell "" [ref=f5e1095]:
                - generic [ref=f5e1098]:
                  - checkbox "" [ref=f5e1099]
                  - generic [ref=f5e1100]: 
              - cell [ref=f5e1102]
              - cell "DIRow005Q7N4" [ref=f5e1103]
              - cell "RowCountFixture" [ref=f5e1105]
              - cell [ref=f5e1107]
              - cell [ref=f5e1108]
              - cell [ref=f5e1109]
              - cell [ref=f5e1110]
              - cell [ref=f5e1111]:
                - generic [ref=f5e1112]:
                  - button "" [ref=f5e1113]
                  - button "" [ref=f5e1115]
            - row [ref=f5e1118] [cursor=pointer]:
              - cell "" [ref=f5e1119]:
                - generic [ref=f5e1122]:
                  - checkbox "" [ref=f5e1123]
                  - generic [ref=f5e1124]: 
              - cell [ref=f5e1126]
              - cell "DIRow006Q7N4" [ref=f5e1127]
              - cell "RowCountFixture" [ref=f5e1129]
              - cell [ref=f5e1131]
              - cell [ref=f5e1132]
              - cell [ref=f5e1133]
              - cell [ref=f5e1134]
              - cell [ref=f5e1135]:
                - generic [ref=f5e1136]:
                  - button "" [ref=f5e1137]
                  - button "" [ref=f5e1139]
            - row [ref=f5e1142] [cursor=pointer]:
              - cell "" [ref=f5e1143]:
                - generic [ref=f5e1146]:
                  - checkbox "" [ref=f5e1147]
                  - generic [ref=f5e1148]: 
              - cell [ref=f5e1150]
              - cell "DIRow007Q7N4" [ref=f5e1151]
              - cell "RowCountFixture" [ref=f5e1153]
              - cell [ref=f5e1155]
              - cell [ref=f5e1156]
              - cell [ref=f5e1157]
              - cell [ref=f5e1158]
              - cell [ref=f5e1159]:
                - generic [ref=f5e1160]:
                  - button "" [ref=f5e1161]
                  - button "" [ref=f5e1163]
            - row [ref=f5e1166] [cursor=pointer]:
              - cell "" [ref=f5e1167]:
                - generic [ref=f5e1170]:
                  - checkbox "" [ref=f5e1171]
                  - generic [ref=f5e1172]: 
              - cell [ref=f5e1174]
              - cell "DIRow008Q7N4" [ref=f5e1175]
              - cell "RowCountFixture" [ref=f5e1177]
              - cell [ref=f5e1179]
              - cell [ref=f5e1180]
              - cell [ref=f5e1181]
              - cell [ref=f5e1182]
              - cell [ref=f5e1183]:
                - generic [ref=f5e1184]:
                  - button "" [ref=f5e1185]
                  - button "" [ref=f5e1187]
            - row [ref=f5e1190] [cursor=pointer]:
              - cell "" [ref=f5e1191]:
                - generic [ref=f5e1194]:
                  - checkbox "" [ref=f5e1195]
                  - generic [ref=f5e1196]: 
              - cell [ref=f5e1198]
              - cell "DIRow009Q7N4" [ref=f5e1199]
              - cell "RowCountFixture" [ref=f5e1201]
              - cell [ref=f5e1203]
              - cell [ref=f5e1204]
              - cell [ref=f5e1205]
              - cell [ref=f5e1206]
              - cell [ref=f5e1207]:
                - generic [ref=f5e1208]:
                  - button "" [ref=f5e1209]
                  - button "" [ref=f5e1211]
            - row [ref=f5e1214] [cursor=pointer]:
              - cell "" [ref=f5e1215]:
                - generic [ref=f5e1218]:
                  - checkbox "" [ref=f5e1219]
                  - generic [ref=f5e1220]: 
              - cell [ref=f5e1222]
              - cell "DIRow010Q7N4" [ref=f5e1223]
              - cell "RowCountFixture" [ref=f5e1225]
              - cell [ref=f5e1227]
              - cell [ref=f5e1228]
              - cell [ref=f5e1229]
              - cell [ref=f5e1230]
              - cell [ref=f5e1231]:
                - generic [ref=f5e1232]:
                  - button "" [ref=f5e1233]
                  - button "" [ref=f5e1235]
            - row [ref=f5e1238] [cursor=pointer]:
              - cell "" [ref=f5e1239]:
                - generic [ref=f5e1242]:
                  - checkbox "" [ref=f5e1243]
                  - generic [ref=f5e1244]: 
              - cell [ref=f5e1246]
              - cell "DIRow011Q7N4" [ref=f5e1247]
              - cell "RowCountFixture" [ref=f5e1249]
              - cell [ref=f5e1251]
              - cell [ref=f5e1252]
              - cell [ref=f5e1253]
              - cell [ref=f5e1254]
              - cell [ref=f5e1255]:
                - generic [ref=f5e1256]:
                  - button "" [ref=f5e1257]
                  - button "" [ref=f5e1259]
            - row [ref=f5e1262] [cursor=pointer]:
              - cell "" [ref=f5e1263]:
                - generic [ref=f5e1266]:
                  - checkbox "" [ref=f5e1267]
                  - generic [ref=f5e1268]: 
              - cell [ref=f5e1270]
              - cell "DIRow012Q7N4" [ref=f5e1271]
              - cell "RowCountFixture" [ref=f5e1273]
              - cell [ref=f5e1275]
              - cell [ref=f5e1276]
              - cell [ref=f5e1277]
              - cell [ref=f5e1278]
              - cell [ref=f5e1279]:
                - generic [ref=f5e1280]:
                  - button "" [ref=f5e1281]
                  - button "" [ref=f5e1283]
            - row [ref=f5e1286] [cursor=pointer]:
              - cell "" [ref=f5e1287]:
                - generic [ref=f5e1290]:
                  - checkbox "" [ref=f5e1291]
                  - generic [ref=f5e1292]: 
              - cell [ref=f5e1294]
              - cell "DIRow013Q7N4" [ref=f5e1295]
              - cell "RowCountFixture" [ref=f5e1297]
              - cell [ref=f5e1299]
              - cell [ref=f5e1300]
              - cell [ref=f5e1301]
              - cell [ref=f5e1302]
              - cell [ref=f5e1303]:
                - generic [ref=f5e1304]:
                  - button "" [ref=f5e1305]
                  - button "" [ref=f5e1307]
            - row [ref=f5e1310] [cursor=pointer]:
              - cell "" [ref=f5e1311]:
                - generic [ref=f5e1314]:
                  - checkbox "" [ref=f5e1315]
                  - generic [ref=f5e1316]: 
              - cell [ref=f5e1318]
              - cell "DIRow014Q7N4" [ref=f5e1319]
              - cell "RowCountFixture" [ref=f5e1321]
              - cell [ref=f5e1323]
              - cell [ref=f5e1324]
              - cell [ref=f5e1325]
              - cell [ref=f5e1326]
              - cell [ref=f5e1327]:
                - generic [ref=f5e1328]:
                  - button "" [ref=f5e1329]
                  - button "" [ref=f5e1331]
            - row [ref=f5e1334] [cursor=pointer]:
              - cell "" [ref=f5e1335]:
                - generic [ref=f5e1338]:
                  - checkbox "" [ref=f5e1339]
                  - generic [ref=f5e1340]: 
              - cell [ref=f5e1342]
              - cell "DIRow015Q7N4" [ref=f5e1343]
              - cell "RowCountFixture" [ref=f5e1345]
              - cell [ref=f5e1347]
              - cell [ref=f5e1348]
              - cell [ref=f5e1349]
              - cell [ref=f5e1350]
              - cell [ref=f5e1351]:
                - generic [ref=f5e1352]:
                  - button "" [ref=f5e1353]
                  - button "" [ref=f5e1355]
            - row [ref=f5e1358] [cursor=pointer]:
              - cell "" [ref=f5e1359]:
                - generic [ref=f5e1362]:
                  - checkbox "" [ref=f5e1363]
                  - generic [ref=f5e1364]: 
              - cell [ref=f5e1366]
              - cell "DIRow016Q7N4" [ref=f5e1367]
              - cell "RowCountFixture" [ref=f5e1369]
              - cell [ref=f5e1371]
              - cell [ref=f5e1372]
              - cell [ref=f5e1373]
              - cell [ref=f5e1374]
              - cell [ref=f5e1375]:
                - generic [ref=f5e1376]:
                  - button "" [ref=f5e1377]
                  - button "" [ref=f5e1379]
            - row [ref=f5e1382] [cursor=pointer]:
              - cell "" [ref=f5e1383]:
                - generic [ref=f5e1386]:
                  - checkbox "" [ref=f5e1387]
                  - generic [ref=f5e1388]: 
              - cell [ref=f5e1390]
              - cell "DIRow017Q7N4" [ref=f5e1391]
              - cell "RowCountFixture" [ref=f5e1393]
              - cell [ref=f5e1395]
              - cell [ref=f5e1396]
              - cell [ref=f5e1397]
              - cell [ref=f5e1398]
              - cell [ref=f5e1399]:
                - generic [ref=f5e1400]:
                  - button "" [ref=f5e1401]
                  - button "" [ref=f5e1403]
            - row [ref=f5e1406] [cursor=pointer]:
              - cell "" [ref=f5e1407]:
                - generic [ref=f5e1410]:
                  - checkbox "" [ref=f5e1411]
                  - generic [ref=f5e1412]: 
              - cell [ref=f5e1414]
              - cell "DIRow018Q7N4" [ref=f5e1415]
              - cell "RowCountFixture" [ref=f5e1417]
              - cell [ref=f5e1419]
              - cell [ref=f5e1420]
              - cell [ref=f5e1421]
              - cell [ref=f5e1422]
              - cell [ref=f5e1423]:
                - generic [ref=f5e1424]:
                  - button "" [ref=f5e1425]
                  - button "" [ref=f5e1427]
            - row [ref=f5e1430] [cursor=pointer]:
              - cell "" [ref=f5e1431]:
                - generic [ref=f5e1434]:
                  - checkbox "" [ref=f5e1435]
                  - generic [ref=f5e1436]: 
              - cell [ref=f5e1438]
              - cell "DIRow019Q7N4" [ref=f5e1439]
              - cell "RowCountFixture" [ref=f5e1441]
              - cell [ref=f5e1443]
              - cell [ref=f5e1444]
              - cell [ref=f5e1445]
              - cell [ref=f5e1446]
              - cell [ref=f5e1447]:
                - generic [ref=f5e1448]:
                  - button "" [ref=f5e1449]
                  - button "" [ref=f5e1451]
            - row [ref=f5e1454] [cursor=pointer]:
              - cell "" [ref=f5e1455]:
                - generic [ref=f5e1458]:
                  - checkbox "" [ref=f5e1459]
                  - generic [ref=f5e1460]: 
              - cell [ref=f5e1462]
              - cell "DIRow020Q7N4" [ref=f5e1463]
              - cell "RowCountFixture" [ref=f5e1465]
              - cell [ref=f5e1467]
              - cell [ref=f5e1468]
              - cell [ref=f5e1469]
              - cell [ref=f5e1470]
              - cell [ref=f5e1471]:
                - generic [ref=f5e1472]:
                  - button "" [ref=f5e1473]
                  - button "" [ref=f5e1475]
            - row [ref=f5e1478] [cursor=pointer]:
              - cell "" [ref=f5e1479]:
                - generic [ref=f5e1482]:
                  - checkbox "" [ref=f5e1483]
                  - generic [ref=f5e1484]: 
              - cell [ref=f5e1486]
              - cell "DIRow021Q7N4" [ref=f5e1487]
              - cell "RowCountFixture" [ref=f5e1489]
              - cell [ref=f5e1491]
              - cell [ref=f5e1492]
              - cell [ref=f5e1493]
              - cell [ref=f5e1494]
              - cell [ref=f5e1495]:
                - generic [ref=f5e1496]:
                  - button "" [ref=f5e1497]
                  - button "" [ref=f5e1499]
        - navigation "Pagination Navigation" [ref=f5e1502]:
          - list [ref=f5e1503]:
            - listitem [ref=f5e1504]:
              - button "1" [ref=f5e1505] [cursor=pointer]
            - listitem [ref=f5e1506]:
              - button "2" [ref=f5e1507] [cursor=pointer]
            - listitem [ref=f5e1508]:
              - button "3" [ref=f5e1509] [cursor=pointer]
            - listitem [ref=f5e1510]:
              - button "4" [ref=f5e1511] [cursor=pointer]
            - listitem [ref=f5e1512]:
              - button "5" [ref=f5e1513] [cursor=pointer]
            - listitem [ref=f5e1514]:
              - button "" [ref=f5e1515] [cursor=pointer]
    - generic [ref=f5e1517]:
      - paragraph [ref=f5e1518]: OrangeHRM OS 5.9
      - paragraph [ref=f5e1519]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e1520] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('OrangeHRM - add and delete employee', async ({ page }) => {
  4  | 
  5  |     await page.goto(
  6  |         "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  7  |     );
  8  | 
  9  |     // Login
  10 |     const uname = page.locator("//input[contains(@name,'username')]");
  11 |     const pwd = page.locator("//input[contains(@name,'password')]");
  12 | 
  13 |     await uname.fill('Admin');
  14 |     await pwd.fill('admin123');
  15 | 
  16 |     await page.locator(
  17 |         "//button[contains(@class,'orangehrm-login-button')]"
  18 |     ).click();
  19 | 
  20 |     console.log('Admin Logged in');
  21 | 
  22 |     // Validate Dashboard
  23 |     await expect(page).toHaveURL(
  24 |         "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
  25 |     );
  26 | 
  27 |     // Go to PIM
  28 |     await page.locator("//span[text()='PIM']").click();
  29 | 
  30 |     // Click Add
  31 |     await page.locator(
  32 |         "//div[contains(@class,'orangehrm-header-container')]/button"
  33 |     ).first().click();
  34 | 
  35 |     // Employee details
  36 |     await page.locator(
  37 |         "//input[contains(@name,'firstName')]"
  38 |     ).fill("Maddy1");
  39 | 
  40 |     await page.locator(
  41 |         "//input[contains(@name,'middleName')]"
  42 |     ).fill("Mad1");
  43 | 
  44 |     await page.locator(
  45 |         "//input[contains(@name,'lastName')]"
  46 |     ).fill("Max1");
  47 | 
  48 |     // Employee ID
  49 |     await page.locator(
  50 |         "//label[contains(text(),'Employee Id')]/following::input[1]"
  51 |     ).fill("016");
  52 | 
  53 |     // Save
  54 |     await page.getByRole('button', { name: 'Save' }).click();
  55 | 
  56 |     // Wait for personal details page
  57 |     await expect(page).toHaveURL(
  58 |         /pim\/viewPersonalDetails\/empNumber\/\d+/
  59 |     );
  60 | 
  61 |     console.log("Employee created");
  62 | 
  63 |     // Go back to employee list
  64 |     await page.locator("//span[text()='PIM']").click();
  65 | 
  66 |     // Verify employee list
  67 |     await expect(page).toHaveURL(
  68 |         "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
  69 |     );
  70 | 
  71 |     console.log("Employee list opened");
  72 | 
  73 |     // Find Maddy1's row
  74 |     const row = page.locator(
  75 |         "//div[contains(@class,'oxd-table-row')]" +
  76 |         "[.//div[contains(@class,'oxd-table-cell') and contains(.,'Maddy1')]]"
  77 |     );
  78 | 
  79 |     // Verify Maddy1 exists
> 80 |     await expect(row).toHaveCount(1);
     |                       ^ Error: expect(locator).toHaveCount(expected) failed
  81 | 
  82 |     console.log("Maddy1 found");
  83 | 
  84 |     // Click Delete button
  85 |     await row.getByRole('button').nth(1).click();
  86 | 
  87 |     // Confirm deletion
  88 |     await page.getByRole(
  89 |         'button',
  90 |         { name: 'Yes, Delete' }
  91 |     ).click();
  92 | 
  93 |     console.log("Maddy1 deleted");
  94 | 
  95 |     await page.pause();
  96 | });
```