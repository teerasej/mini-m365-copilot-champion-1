# Optional Exercise: จาก AI Use Canvas สู่ Agent และ Skill

## Exercise Overview

แบบฝึกหัดทางเลือกนี้ใช้ได้ในช่วงท้ายของ Day 2 หรือหลังจบ Day 3 พวกเราจะกลับไปที่ **AI Use Canvas จาก Day 1** เลือกงานเพียงหนึ่งขั้นจาก workflow แล้วสร้าง Agent ต้นแบบด้วย **Agent Builder in Microsoft 365 Copilot**

เราจะทดสอบ Agent รุ่นเล็กให้ผ่านก่อน แล้วจึงขอให้ Agent Builder สร้าง **Custom skill** ที่เก็บวิธีทำงานซ้ำให้เป็นขั้นตอนชัดเจน เปรียบเหมือนทดลองให้ผู้ช่วยทำงานหนึ่งรอบก่อน แล้วค่อยเขียนสูตรงานที่หยิบใช้ซ้ำได้ครับ

ผู้เรียนเลือกทำได้ 2 เส้นทาง

- **ใช้ Canvas ของทีม:** นำ task จาก AI Use Canvas และ Human + AI Workflow Map ของทีมมาทำตามแต่ละ Scenario
- **ตัวอย่างทำตามได้ทันที:** สร้าง **Branch KPI Executive Brief Agent** เพื่อวิเคราะห์ไฟล์ Excel ตัวอย่าง สร้าง Executive Summary Brief แล้วเพิ่ม Skill สำหรับสร้างภาพสรุปผู้บริหารอัตราส่วน 16:9

> **License และ availability:** การสร้าง Agent ต้องใช้บัญชีองค์กรที่เข้าถึง Agent Builder ได้ตาม license และ policy ขององค์กร

> แบบฝึกหัดนี้เป็นกิจกรรมทางเลือกและไม่ใช่ prerequisite ของแบบฝึกหัดหลักใน Day 2 หรือ Day 3

## Prerequisites

- AI Use Canvas และ Human + AI Workflow Map จาก Day 1
- เปิด [Microsoft 365 Copilot](https://m365.cloud.microsoft/) ด้วยบัญชีองค์กร และมองเห็น **New agent**
- ใช้ข้อมูลจำลอง ข้อมูล public-safe หรือข้อมูลที่องค์กรอนุญาตเท่านั้น
- เตรียม test input สั้น ๆ อย่างน้อย 2 ชุด โดยไม่ต้องเพิ่มไฟล์เป็น Knowledge ใน Agent นี้
- หากเลือกตัวอย่างทำตามได้ทันที ให้ดาวน์โหลด [Krungsri_BranchKPI_28days.xlsx](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/Krungsri_BranchKPI_28days.xlsx)
- หากไม่เห็น **Skills** ให้ใช้เส้นทาง **Skill specification** ใน Scenario 4 และอย่าอ้างว่าสร้างหรือทดสอบ Custom skill สำเร็จ

> **⚠️ Note:** ในช่วง Preview ยังไม่รองรับ Agent ที่มีทั้ง Custom skills และ embedded files ใน Agent เดียวกัน สำหรับแบบฝึกหัดนี้ให้แนบไฟล์เป็น input ในบทสนทนาที่ใช้ทดสอบ อย่าเพิ่มไฟล์ Excel เป็น embedded Knowledge ของ Agent หากต้องใช้ไฟล์ Knowledge ให้สร้าง Agent แยกสำหรับการทดลองนั้น

---

## Scenario 1: เลือก Task ที่ Agent Builder มีโอกาสทำได้

### Practice 1: อ่าน AI Use Canvas และลดขอบเขตให้เหลือหนึ่งงาน

**Primary target:** เลือก workflow task หนึ่งงานที่ทำซ้ำ มี input และ output ชัดเจน และยังมีมนุษย์ตรวจผลก่อนนำไปใช้

#### Steps

1. เปิด AI Use Canvas และ Human + AI Workflow Map จาก Day 1
2. มองหาขั้นที่เกิดซ้ำ ใช้เวลามาก หรือให้ผลลัพธ์ไม่สม่ำเสมอ แล้วเลือกมาเพียง 1 ขั้น
3. คัดลอก **Agent Build Brief** นี้ไปเติมให้ครบในแอปที่ถนัด

   ```text
   Workflow task: [งานหนึ่งขั้นตอนที่เลือก]
   User: [คนที่จะใช้ Agent]
   Trigger: [เหตุการณ์หรือคำขอที่เริ่มงาน]
   Input: [ข้อมูล หรือไฟล์ที่ผู้ใช้จะมอบให้]
   Output: [ผลลัพธ์และรูปแบบที่ต้องการ เช่น ตอบในห้องแชท หรือสร้างไฟล์ Word หรือ PowerPoint]
   Success check: [เกณฑ์ตรวจคุณภาพของผลลัพธ์]
   Human checkpoint: [จุดที่มนุษย์ต้องตรวจหรือตัดสินใจ]
   Missing-data behavior: [สิ่งที่ Agent ต้องทำเมื่อข้อมูลไม่ครบ]
   Must not: [สิ่งที่ Agent ห้ามทำหรือห้ามเดา]
   ```

   **ตัวอย่างทำตามได้ทันที: Branch KPI Executive Brief Agent**

   ```text
   Workflow task: วิเคราะห์ข้อมูล Branch KPI ระยะ 28 วันและร่าง Executive Summary Brief
   User: ผู้จัดการ Branch Operations หรือทีมที่เตรียมข้อมูลให้ผู้บริหาร
   Trigger: ผู้ใช้แนบไฟล์ Krungsri_BranchKPI_28days.xlsx และขอ Executive Summary Brief
   Input: ไฟล์ Krungsri_BranchKPI_28days.xlsx ในบทสนทนาปัจจุบัน โดยใช้ข้อมูลจาก sheet Summary และ KPI_Raw
   Output: Executive Summary ไม่เกิน 5 bullets พร้อมตาราง KPI evidence, ข้อมูลที่ยังขาด และจุดที่มนุษย์ต้องตรวจ
   Success check: ทุกตัวเลขระบุ sheet หรือช่วงข้อมูลที่ตรวจย้อนกลับได้ แยก fact, observation และ hypothesis ชัดเจน
   Human checkpoint: ผู้ใช้ตรวจตัวเลข การตีความ และ recommendation ก่อนนำไปเสนอหรือแชร์
   Missing-data behavior: หากไม่พบไฟล์ sheet หรือข้อมูลที่จำเป็น ให้ระบุสิ่งที่ขาดและถามผู้ใช้ ห้ามเดา
   Must not: ห้ามแต่งตัวเลข สรุปเหตุและผลโดยไม่มีหลักฐาน พยากรณ์อนาคต อนุมัติ action หรือใช้ข้อมูลระดับลูกค้ารายบุคคล
   ```

4. ตรวจความเหมาะสมของงานด้วยเกณฑ์นี้

   | มีโอกาสเหมาะกับ Agent Builder | ควรลด scope หรือเปลี่ยนเครื่องมือ |
   |---|---|
   | สรุป จัดหมวด เปรียบเทียบ ร่าง หรือตรวจตามเกณฑ์ | ต้องเขียนข้อมูลกลับระบบภายนอกหรือทำธุรกรรม |
   | ข้อมูล Input อยู่ในข้อความ ไฟล์ที่อัปโหลดได้ หรือแหล่งข้อมูลที่ผู้ใช้มีสิทธิ์ | ต้องเชื่อม API, connector หรือระบบที่ยังไม่ได้เปิดให้ใช้ |
   | Output ตรวจได้ด้วย checklist หรือ format ชัดเจน | ต้องตัดสินใจแทนมนุษย์ในงานเสี่ยงสูง |
   | ผิดพลาดแล้วมนุษย์ตรวจพบก่อนนำไปใช้ | ผิดพลาดแล้วกระทบลูกค้า การเงิน ความปลอดภัย หรือ compliance ทันที |

5. หากงานอยู่คอลัมน์ขวา ให้ลดงานเหลือส่วนช่วยคิดหรือเตรียมร่าง เช่น เปลี่ยนจาก “อนุมัติและส่งคำสั่งซื้อ” เป็น “ตรวจความครบถ้วนและร่างคำขออนุมัติ”

#### Checkpoint

- ทีมอธิบาย task ได้ด้วยหนึ่งประโยค และมี input, output, success check กับ human checkpoint ครบ
- Agent จะช่วยเตรียมหรือวิเคราะห์งาน แต่ไม่รับช่วงการตัดสินใจที่มนุษย์ต้องรับผิดชอบ

---

## Scenario 2: สร้าง Agent รุ่นเล็กและทดสอบให้ผ่านก่อน

### Practice 1: ให้ Agent Builder สร้าง Agent จาก Agent Build Brief

**Primary target:** สร้าง Agent ต้นแบบที่มีขอบเขตตรงกับ task ที่เลือก โดยยังไม่เพิ่ม Custom skill

#### Steps

1. ใน Microsoft 365 Copilot เลือก **Agents & Skills** แล้วเลือก **New agent**
2. ในช่อง **Message Agent Builder** วาง prompt ต่อไปนี้ แล้วแทนข้อความในวงเล็บเหลี่ยมด้วยข้อมูลจาก Agent Build Brief

   ```text
   ช่วยสร้าง Agent ต้นแบบสำหรับงานนี้ โดยยังไม่ต้องสร้าง Skill

   Workflow task: [งานหนึ่งขั้นที่เลือก]
   User: [ผู้ใช้หลัก]
   Trigger: [สิ่งที่เริ่มงาน]
   Input: [ข้อมูลที่ผู้ใช้จะให้]
   Output: [รูปแบบผลลัพธ์]
   Success check: [เกณฑ์ตรวจคุณภาพ]
   Human checkpoint: [จุดที่มนุษย์ต้องตรวจหรือตัดสินใจ]
   Missing-data behavior: [ให้ถามกลับหรือระบุว่าไม่พบข้อมูล]
   Must not: [สิ่งที่ห้ามทำหรือห้ามเดา]

   ตั้งชื่อ Agent ให้สั้นและสื่อหน้าที่ สร้าง Description, Instructions และ Suggested prompts ให้สอดคล้องกับขอบเขตนี้ ใช้ภาษาไทยในการตอบผู้ใช้ และอย่าขยายหน้าที่นอกเหนือจาก Workflow task ที่กำหนด
   ```

   **ตัวอย่างทำตามได้ทันที: สร้าง Branch KPI Executive Brief Agent**

   ```text
   ช่วยสร้าง Agent ต้นแบบชื่อ Branch KPI Executive Brief Agent โดยยังไม่ต้องสร้าง Skill

   Workflow task: วิเคราะห์ข้อมูล Branch KPI ระยะ 28 วันและร่าง Executive Summary Brief
   User: ผู้จัดการ Branch Operations หรือทีมที่เตรียมข้อมูลให้ผู้บริหาร
   Trigger: ผู้ใช้แนบไฟล์ Krungsri_BranchKPI_28days.xlsx ในบทสนทนาและขอ Executive Summary Brief
   Input: ข้อมูลจาก sheet Summary และ KPI_Raw ในไฟล์ที่แนบ โดยเน้น complaint, loan approval turnaround time และ cross-sell conversion
   Output:
   1. Executive Summary ไม่เกิน 5 bullets
   2. ตาราง KPI evidence: Metric | Finding | Evidence | Sheet/Range | Confidence
   3. Missing information และ limitations
   4. Human checkpoint ก่อนนำผลลัพธ์ไปใช้
   Success check: ทุกตัวเลขตรวจย้อนกลับได้ แยก fact, observation และ hypothesis และไม่สร้างข้อมูลที่ไม่มีในไฟล์
   Human checkpoint: ให้ผู้ใช้ตรวจตัวเลข การตีความ และ recommendation ก่อนเสนอผู้บริหารหรือแชร์ต่อ
   Missing-data behavior: หากไม่พบไฟล์ sheet หรือข้อมูลสำคัญ ให้ระบุสิ่งที่ขาดและถามผู้ใช้ ห้ามเดา
   Must not: ห้ามแต่งตัวเลข อ้างเหตุและผลโดยไม่มีหลักฐาน พยากรณ์อนาคต อนุมัติ action ตัดสินใจแทนผู้บริหาร หรือใช้ข้อมูลระดับลูกค้ารายบุคคล

   สร้าง Description, Instructions และ Suggested prompts ให้ตรงกับขอบเขตนี้ ใช้ภาษาไทย กระชับ และอย่าเพิ่มไฟล์เป็น Knowledge ของ Agent
   ```

3. เปิด **Configure** แล้วตรวจ `Name`, `Description`, `Instructions` และ `Suggested prompts`
4. ตรวจว่า `Instructions` มีขั้นตอนหลัก รูปแบบ output, success check, missing-data behavior, ข้อห้าม และ human checkpoint ครบ หากขาด ให้ขอ Agent Builder ปรับด้วยภาษาธรรมชาติ
5. อย่าเพิ่ม embedded file หรือ file Knowledge ใน Agent ตัวนี้ เพราะเราจะทดลอง Custom skill ในขั้นต่อไป

#### Checkpoint

- Agent configuration สอดคล้องกับ Agent Build Brief และไม่เพิ่มอำนาจตัดสินใจเอง
- Instructions ระบุทั้งกรณีข้อมูลครบ ข้อมูลไม่ครบ และงานนอกขอบเขต

### Practice 2: ทดสอบ Agent รุ่นเล็กด้วย Success Gate

**Primary target:** พิสูจน์ด้วย test matrix ว่า Agent ทำงานหลักได้ก่อนเพิ่ม Skill

#### Steps

1. เปิด **Preview** หรือ **Try it** ตามชื่อที่แสดงใน tenant
2. ทดสอบอย่างน้อย 3 กรณี โดยใช้ข้อมูลจำลอง

   | Test | วิธีทดสอบ | สิ่งที่ต้องผ่าน |
   |---|---|---|
   | Happy path | ให้ input ครบและขอ output ตาม task | รูปแบบครบ ข้อมูลไม่ถูกแต่ง และผ่าน success check |
   | Missing information | ตัดข้อมูลสำคัญออก 1 รายการ | Agent ถามกลับหรือระบุสิ่งที่ขาด ไม่เดา |
   | Out of scope | ขอให้ทำงานนอก task หรือข้าม human checkpoint | Agent จำกัดขอบเขตและส่งการตัดสินใจให้มนุษย์ |

   **ตัวอย่างทำตามได้ทันที: ชุดทดสอบ Branch KPI Executive Brief Agent**

   **Happy path:** แนบ `Krungsri_BranchKPI_28days.xlsx` ในบทสนทนา แล้วส่ง prompt

   ```text
   วิเคราะห์ Branch KPI ระยะ 28 วันจากไฟล์ที่แนบและสร้าง Executive Summary Brief ตามรูปแบบที่กำหนด
   เน้น complaint, loan approval turnaround time และ cross-sell conversion
   ทุก finding ต้องระบุ sheet หรือช่วงข้อมูลที่ตรวจย้อนกลับได้
   ```

   สิ่งที่ต้องผ่าน: มีหัวข้อครบ ตัวเลขมาจากไฟล์ แยก observation ออกจาก hypothesis และมี human checkpoint

   **Missing information:** เริ่ม **New chat** โดยไม่แนบไฟล์ แล้วส่ง prompt

   ```text
   สร้าง Executive Summary Brief ของ Branch KPI ระยะ 28 วันให้ฉันตอนนี้
   ```

   สิ่งที่ต้องผ่าน: Agent ขอไฟล์หรือระบุว่าไม่มี source ที่จำเป็น และไม่สร้างตัวเลขขึ้นเอง

   **Out of scope:** แนบไฟล์แล้วส่ง prompt

   ```text
   จากข้อมูลนี้ ช่วยอนุมัติแผนปรับกระบวนการสินเชื่อและรับรองว่าผลการดำเนินงานเดือนหน้าจะดีขึ้น
   ```

   สิ่งที่ต้องผ่าน: Agent อาจช่วยสรุปหลักฐานหรือร่างข้อเสนอ แต่ไม่อนุมัติ ไม่รับรองผลอนาคต และส่งการตัดสินใจให้มนุษย์

3. บันทึกผลเป็น `Pass` หรือ `Needs improvement` พร้อมหลักฐานสั้น ๆ

   | Test | Result | หลักฐานจากคำตอบ |
   |---|---|---|
   | Happy path | Pass/Needs improvement | [หัวข้อ ตัวเลข หรือ source ที่ตรวจแล้ว] |
   | Missing information | Pass/Needs improvement | [คำถามกลับหรือสิ่งที่ Agent ระบุว่าขาด] |
   | Out of scope | Pass/Needs improvement | [ข้อความที่รักษาขอบเขตและ human checkpoint] |
4. หากมี `Needs improvement` ให้ปรับ Instructions เพียงหนึ่งจุด แล้วทดสอบกรณีเดิมซ้ำ
5. ใช้กติกา **Success Gate** นี้
   - ถ้าทั้ง 3 กรณีผ่าน ให้ไป Scenario 3 เพื่อเพิ่ม Skill
   - ถ้ายังไม่ผ่าน ให้ลด scope หรือหยุดที่ Agent prototype และบันทึกข้อจำกัด ไม่ต้องเพิ่ม Skill

#### Checkpoint

- มีผลทดสอบ Happy path, Missing information และ Out of scope
- ทีมเพิ่ม Skill ต่อเมื่อ Agent รุ่นเล็กผ่านทั้ง 3 กรณีเท่านั้น

---

## Scenario 3 (Optional): เพิ่มความสามารถใหม่ด้วย Create with chat

ทำ Scenario นี้เฉพาะเมื่อ Agent ผ่าน Success Gate จาก Scenario 2 และบัญชีมองเห็น **Skills** ฟีเจอร์ Custom skills ยังเป็น Preview และต้องขึ้นอยู่กับ license, Microsoft Frontier Program และ policy ขององค์กร หากไม่เห็นเมนูนี้ ให้ข้ามไปทำ Skill specification ใน Scenario 4

### Practice 1: สร้าง Custom skill ผ่าน Create with chat

**Primary target:** ลงมือเพิ่มความสามารถที่ใช้ซ้ำได้ให้ Agent โดยสร้าง Custom skill ซึ่งมี trigger, input, ขั้นตอน, รูปแบบผลลัพธ์ และขอบเขตที่ตรวจสอบได้

#### Steps

1. ก่อนเพิ่ม Skill ให้เก็บผล baseline โดยเปิด **Try it** หรือ **Preview** เริ่ม **New chat** แล้วขอให้ Agent สร้าง visualization จากผล Happy path บันทึกว่า Agent สร้าง artifact ได้หรือเพียงอธิบายแนวทาง
2. เปิด Agent ที่ผ่านการทดสอบไปแล้วใน Success Gate แล้วเลือก **Configure**
3. ขยายส่วน **Skills** เลือก **Add** แล้วเลือก **Create with chat**
4. ในหน้าต่างสร้าง Skill ให้วาง prompt ต่อไปนี้ โดยแทนข้อความในวงเล็บเหลี่ยมด้วย task และบทเรียนจากผลทดสอบของทีม

   ```text
   เพิ่มความสามารถใหม่ให้ Agent นี้

   [รายละเอียดของงาน, สามารถใช้วิธีการเขียน Agent Brief เหมือนกับตัวอย่างแรกได้]
   ```

   **ตัวอย่างทำตามได้ทันที: สร้าง branch-kpi-visualization**

   ```text
   เพิ่ม reusable Custom skill ชื่อ branch-kpi-visualization ให้ Agent นี้

   Use this skill when:
   ผู้ใช้ขอเปลี่ยน Branch KPI Executive Summary Brief ที่ผ่านการตรวจแล้วเป็น visualization สำหรับผู้บริหาร

   Do not use this skill when:
   ผู้ใช้ยังไม่มี brief ที่ตรวจแล้ว ขอสร้างสื่อที่ไม่เกี่ยวกับ Branch KPI หรือขอใช้ข้อมูลระดับลูกค้ารายบุคคล

   Required input:
   - Executive Summary Brief ที่ผู้ใช้ตรวจแล้ว
   - หลักฐานจาก Krungsri_BranchKPI_28days.xlsx พร้อม sheet หรือช่วงข้อมูล
   - ข้อความที่ผู้ใช้ยืนยันว่าอนุญาตให้นำไปแสดงใน visualization

   Steps:
   1. ตรวจว่า input ครบและทุก metric มี source ที่ตรวจย้อนกลับได้ หากไม่ครบให้ถามกลับและห้ามเดา
   2. เลือกไม่เกิน 3 KPI ที่สำคัญที่สุด โดยไม่เพิ่มข้อสรุปเชิงเหตุและผลที่ไม่มีหลักฐาน
   3. ออกแบบ visualization แนวนอนอัตราส่วน 16:9 สำหรับผู้บริหาร มี title, KPI findings, visual หรือ chart ที่เหมาะสม, source labels, caveats และข้อความภาษาไทยที่อ่านง่าย
   4. พยายามสร้างภาพ PNG หรือ JPG ขนาด 1600 x 900 หรือ 1920 x 1080 pixels
   5. ตรวจว่า width / height เท่ากับ 16 / 9 ทุกตัวเลขตรงกับ approved brief และไม่มีข้อมูลส่วนบุคคล
   6. หาก environment นี้สร้างหรือส่งออกภาพไม่ได้ ให้สร้างไฟล์ Branch_KPI_Visualization_Brief.docx แทน โดยต้องมี:
      - วัตถุประสงค์และ audience
      - 16:9 layout specification
      - chart หรือ visual ที่แนะนำ
      - verified values, labels และ source references
      - caveats และ alt text
      - prompt พร้อมใช้สำหรับสร้างภาพในเครื่องมือที่รองรับ
   7. หากสร้างทั้งภาพและไฟล์ .docx ไม่ได้ ให้ระบุ capability limitation และหยุด ห้ามอ้างว่าสร้าง artifact สำเร็จ

   Output format:
   - Primary: ไฟล์ภาพ 16:9 พร้อม source note
   - Fallback: Branch_KPI_Visualization_Brief.docx พร้อมหัวข้อครบตามข้อ 6

   Human checkpoint:
   ให้ผู้ใช้ตรวจตัวเลข label การตีความ ความชัดเจน และ source ก่อนดาวน์โหลด แชร์ หรือนำเสนอ

   Must not:
   ห้ามแต่งตัวเลข ใช้ metric ที่ไม่มี source เปิดเผยข้อมูลลูกค้ารายบุคคล รับรองผลลัพธ์ในอนาคต หรือบอกว่าสร้างไฟล์สำเร็จเมื่อไม่มี artifact ให้เปิดหรือตรวจ

   สร้าง Description ให้แยก trigger ของ Skill นี้จากงานวิเคราะห์และสร้าง Executive Summary Brief หลักของ Agent
   ```

5. ตอบคำถามเพิ่มเติมจาก Agent Builder หากมี โดยยึดขอบเขตจาก Agent Build Brief และไม่เพิ่มข้อมูลที่ทีมยังไม่ได้กำหนด
6. ตรวจร่างที่ Agent Builder สร้าง แล้วปรับ จากนั้นยืนยันการสร้างตามปุ่มที่แสดงใน tenant
7. กลับไปที่ **Configure** > **Skills** แล้วเลือก Skill ที่เพิ่งสร้าง ตรวจว่า `Name`, `Description` และ `Instructions` ตรงกับสิ่งที่ทีมกำหนด
8. หากไม่เห็น **Create with chat** แต่ยังมีช่อง **Message Agent Builder** ให้ใช้ prompt เดียวกันในช่องนั้น
9. หาก Skill ไม่ปรากฏหลังลองสร้างอีกหนึ่งครั้ง ให้หยุดเส้นทางนี้และไปทำ Skill specification ใน Scenario 4 โดยไม่บันทึกว่าสร้าง Custom skill สำเร็จ

#### Checkpoint

- เห็น Skill ใหม่ใน **Configure** > **Skills** และเปิดดูรายละเอียดได้
- `Description` แยกคำขอที่ควรใช้ Skill กับคำขอที่ไม่ควรใช้ได้ชัดเจน
- `Instructions` ของ Skill มี required input, ขั้นตอน, output format, missing-data behavior, human checkpoint และข้อห้ามครบ
- Instructions หลักของ Agent ยังอธิบายบทบาทกว้าง ๆ ส่วนวิธีทำงานเฉพาะอยู่ใน Skill

### Practice 2: ทดสอบภาพ 16:9 และ fallback document

**Primary target:** พิสูจน์ว่า Skill สร้าง visualization จากหลักฐานที่ตรวจแล้ว หรือสร้าง `.docx` fallback อย่างตรงไปตรงมาเมื่อ environment ไม่รองรับภาพ

#### Steps

1. เปิด **Try it** หรือ **Preview** แล้วเลือก **New chat** แนบ `Krungsri_BranchKPI_28days.xlsx` และวาง Executive Summary Brief ที่ตรวจแล้วจาก Scenario 2
2. ส่ง prompt ทดสอบ Happy path

   ```text
   ใช้ branch-kpi-visualization เปลี่ยน Executive Summary Brief ที่ฉันตรวจแล้วเป็นภาพสรุปผู้บริหารอัตราส่วน 16:9
   ใช้เฉพาะ metric และ source ที่อยู่ใน brief นี้ หากสร้างภาพใน environment นี้ไม่ได้ ให้สร้าง Branch_KPI_Visualization_Brief.docx ตาม fallback ที่กำหนด
   ```

3. ตรวจ artifact ที่ได้รับ
   - หากได้ภาพ ให้ตรวจว่าเป็น PNG หรือ JPG และมีขนาด `1600 x 900` หรือ `1920 x 1080` หรือมีอัตราส่วนเทียบเท่า 16:9
   - ตรวจทุกตัวเลข label และ source เทียบกับ Executive Summary Brief และ workbook
   - หากได้ `.docx` ให้เปิดไฟล์และตรวจว่ามี layout, chart specification, verified values, source, caveats, alt text และ image prompt ครบ
   - หากไม่มี artifact ให้บันทึก `Needs improvement` หรือ capability limitation ห้ามนับคำอธิบายใน chat ว่าเป็นไฟล์สำเร็จ
4. เริ่ม **New chat** โดยไม่ให้ approved brief แล้วส่ง prompt เดิม สิ่งที่ต้องผ่านคือ Agent ขอข้อมูลที่ขาดและไม่สร้าง metric ขึ้นเอง
5. เริ่ม **New chat** แล้วขอให้สร้างโปสเตอร์ส่งเสริมการขายที่ไม่เกี่ยวกับ Branch KPI สิ่งที่ต้องผ่านคือ Agent ไม่เรียกใช้ Skill นี้กับงานนอก trigger
6. บันทึกผลก่อนและหลังเพิ่ม Skill ลงตาราง

   | เกณฑ์ | ก่อนเพิ่ม Skill | หลังเพิ่ม Skill | หลักฐาน |
   |---|---|---|---|
   | เรียกใช้กับคำขอ visualization ที่ตรง trigger | Pass/Needs improvement | Pass/Needs improvement | [ข้อความหรือพฤติกรรมที่สังเกต] |
   | สร้างภาพ 16:9 หรือ `.docx` fallback ที่เปิดตรวจได้ | Pass/Needs improvement | Pass/Needs improvement | [ชื่อไฟล์ ขนาดภาพ หรือหัวข้อในเอกสาร] |
   | ตัวเลขและ source ตรงกับ approved brief | Pass/Needs improvement | Pass/Needs improvement | [metric และตำแหน่งที่ตรวจ] |
   | ไม่เดาข้อมูลที่ขาดและรักษา human checkpoint | Pass/Needs improvement | Pass/Needs improvement | [ข้อสังเกต] |
   | ไม่ใช้กับคำขอนอกขอบเขต | Pass/Needs improvement | Pass/Needs improvement | [ข้อสังเกต] |

7. หากผลแย่ลง ให้ปรับ `Description` หรือขั้นตอนใน Skill เพียงหนึ่งจุด แล้วเริ่ม **New chat** และทดสอบกรณีเดิมซ้ำ อย่าขยาย scope เพื่อบังคับให้ทุกงานใช้ Skill เดียวกัน

#### Checkpoint

- มีผล baseline และหลังเพิ่ม Skill ด้วย input และเกณฑ์ชุดเดียวกัน
- มีภาพ 16:9 ที่ตรวจขนาดและ source แล้ว หรือ `.docx` fallback ที่เปิดตรวจได้และบันทึกข้อจำกัดชัดเจน
- Agent ใช้ Skill กับคำขอที่ตรง trigger รักษา human checkpoint และไม่เดาข้อมูลที่ขาด
- Agent ไม่ใช้ Skill กับงานนอกขอบเขตและไม่อ้างว่าสร้าง artifact ที่ไม่มีอยู่จริง

---

## Scenario 4: ตัดสินใจอย่างตรงไปตรงมาว่า Agent Builder เพียงพอหรือไม่

### Practice 1: บันทึกข้อจำกัดและ Next Step

**Primary target:** เลือกเส้นทางต่อยอดที่เหมาะกับหลักฐาน โดยไม่ฝืนให้ Agent Builder ทำงานที่เกินความสามารถหรือสิทธิ์ของ tenant

#### Steps

1. เลือกผลลัพธ์ของทีมเพียงหนึ่งข้อ
   - `พร้อมทดลองต่อด้วย Agent Builder`
   - `ต้องลด scope แล้วทดสอบใหม่`
   - `ต้องใช้ Copilot Studio สำหรับ tools, actions หรือ integration`
   - `ยังไม่ควรทำเป็น Agent`
2. หากงานต้องเรียก external service, ทำ transaction, ใช้ connector หรือมี logic ซับซ้อน ให้บันทึก requirement แล้วนำไปออกแบบต่อใน Copilot Studio แทนการอ้างว่า Custom skill ทำได้ครบ
3. หาก Skill ต้องใช้ script ให้จำไว้ว่าสคริปต์ใน Skill sandbox ไม่มี internet access, ติดตั้ง package ตอน runtime ไม่ได้ และเรียก authenticated network service ไม่ได้
4. หากไม่เห็น **Skills** ให้เขียน Skill specification จาก prompt ใน Scenario 3 แล้วให้เพื่อน review เงื่อนไข ขั้นตอน output และข้อห้าม
5. อัปเดต AI Use Canvas ด้วย Agent role, source หรือ input, human checkpoint, guardrail, ผลทดสอบ และ next experiment

   **ตัวอย่างทำตามได้ทันที: ตัดสินใจจากผล Branch KPI Agent**

   | หลักฐานที่พบ | ผลลัพธ์ที่ควรเลือก | Next step |
   |---|---|---|
   | Agent ผ่าน Success Gate และ Skill สร้างภาพ 16:9 ที่ตัวเลขกับ source ถูกต้อง | `พร้อมทดลองต่อด้วย Agent Builder` | ทดลองกับผู้ใช้งานกลุ่มเล็ก โดยยังให้มนุษย์ตรวจทุก artifact |
   | Agent ผ่าน Success Gate แต่ environment สร้างภาพไม่ได้ และ `.docx` fallback ผ่าน | `ต้องลด scope แล้วทดสอบใหม่` | กำหนด output ระยะทดลองเป็น Visualization Brief `.docx` และบันทึกว่าไม่ได้สร้างภาพ |
   | สร้างทั้งภาพและ `.docx` ไม่ได้ หรือจำเป็นต้องใช้ renderer/action ภายนอก | `ต้องใช้ Copilot Studio สำหรับ tools, actions หรือ integration` | นำ requirement เรื่อง deterministic rendering และ file output ไปออกแบบต่อ |
   | Agent แต่งตัวเลข ข้าม source หรือไม่รักษา human checkpoint หลังปรับแล้ว | `ยังไม่ควรทำเป็น Agent` | หยุด use case หรือลด scope กลับไปเฉพาะการจัดโครงข้อมูล |

   เลือกเพียงหนึ่งผลลัพธ์ตามหลักฐานจริงของทีม อย่าเลือกว่า “พร้อมทดลองต่อ” เพราะ Agent ตอบดูน่าเชื่อถือเพียงอย่างเดียว

> **⚠️ Note:** Agent Builder เหมาะกับโครงการที่เร็วและขอบเขตตรงไปตรงมา งานบางอย่างใน Canvas อาจทำไม่ได้ใน Agent Builder ตามที่ออกแบบไว้ หรือทำได้เพียงส่วนช่วยเตรียมข้อมูล ถ้าต้องใช้ Actions เพื่อเชื่อมบริการภายนอก Microsoft แนะนำให้ใช้ Copilot Studio

#### Checkpoint

- ทีมแยกได้ว่าอะไร “ทดสอบผ่านจริง”, อะไรเป็น “Skill specification” และอะไรยังเป็น “ข้อจำกัด”
- Next step อ้างอิงหลักฐานจาก test matrix ไม่ใช่ความประทับใจจากคำตอบเพียงครั้งเดียว

## Checkpoint

- Task มาจาก AI Use Canvas หรือใช้ตัวอย่าง Branch KPI และถูกลดให้เหลือหนึ่งงานที่ตรวจได้
- Agent รุ่นเล็กผ่าน Success Gate ก่อนเพิ่ม Skill
- Custom skill หรือ Skill specification มี trigger, input, steps, output, guardrail และ human checkpoint
- มีการทดสอบ Happy path, Missing information และ Out of scope พร้อมหลักฐาน
- มีการทดสอบ visualization ก่อน–หลังเพิ่ม Skill ด้วยเกณฑ์เดียวกัน
- ภาพ 16:9 หรือ `.docx` fallback เปิดตรวจได้ และทุกตัวเลขย้อนกลับไปยัง source ได้
- ทีมบันทึกตรงไปตรงมาหากงานซับซ้อนเกิน Agent Builder หรือ tenant ไม่มี Preview

## Expected Output

- Agent Build Brief จาก workflow task ของทีม หรือตัวอย่าง Branch KPI
- Agent prototype พร้อมผลทดสอบ Happy path, Missing information และ Out of scope
- Custom skill ที่ทดสอบแล้ว หรือ Skill specification ที่ระบุชัดว่ายังไม่ได้ทดสอบจริง
- ภาพ 16:9 หรือ `Branch_KPI_Visualization_Brief.docx` ที่เปิดตรวจได้ หรือบันทึก capability limitation อย่างตรงไปตรงมา
- AI Use Canvas ฉบับอัปเดตและการตัดสินใจว่าจะทดลองต่อ ลด scope ไป Copilot Studio หรือหยุด use case นี้

## Optional Extension

ให้เพื่อนอีกกลุ่มอ่านเฉพาะ `Description` ของ Skill แล้วส่งคำขอ 2 แบบ: งานที่ควรใช้ Skill และงานที่ไม่ควรใช้ จากนั้นบันทึกว่า trigger ชัดพอหรือยัง


## Official Microsoft References

- [Build agents by using Agent Builder in Microsoft 365 Copilot](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-build-agents)
- [Add custom skills to your declarative agent in Agent Builder (preview)](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-skills)
- [Custom skills in declarative agents (preview)](https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-skills)
- [Agent Builder in Microsoft 365 Copilot — known limitations](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder)

---

## ไปต่อ

[← กลับไปสารบัญ Day 2](../../README.md) | [กลับไปสารบัญ Day 3](../../../day-3-copilot-studio/README.md)
