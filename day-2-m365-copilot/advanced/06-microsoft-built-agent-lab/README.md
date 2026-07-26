# Advanced Exercise: เปรียบเทียบ Microsoft-built Agents

## Exercise Overview

พวกเราจะใช้โจทย์ต่างชนิดเพื่อเปรียบเทียบ Copilot Chat กับ Agent ที่ Microsoft สร้างไว้ เช่น **Researcher**, **Analyst**, **Surveys**, **Word Agent**, **Excel Agent** และ **PowerPoint Agent**

Agent แต่ละตัวเหมือนผู้เชี่ยวชาญคนละแผนก การส่งทุกงานให้ Agent ตัวเดียวอาจได้คำตอบ แต่ไม่จำเป็นต้องได้วิธีทำงานที่เหมาะที่สุด

## Prerequisites

1. เปิด **Agents** หรือ **All agents** ใน Microsoft 365 Copilot
2. ดาวน์โหลด [Krungsri_BranchKPI_28days.xlsx](https://github.com/teerasej/mini-m365-copilot-champion-1/raw/refs/heads/main/day-2-m365-copilot/files/Krungsri_BranchKPI_28days.xlsx)
3. ใช้ source และ scenario ตัวอย่างเท่านั้น
4. Agent บางรายการต้องได้รับอนุญาตจาก Admin
5. หากไม่เห็น Agent ให้ใช้ Copilot Chat ทำโจทย์เดียวกันและบันทึกเป็น fallback

## Scenario 1: Researcher สำหรับงานวิจัยหลาย Source

### Practice 1: สร้าง Decision Memo

#### Steps

1. เปิด **Researcher**
2. เลือกโจทย์ที่เกี่ยวกับแนวทางลดระยะเวลาอนุมัติสินเชื่อโดยไม่ลดคุณภาพการตรวจสอบ
3. กำหนด scope ให้ใช้ทั้งแหล่งข้อมูลสาธารณะและ work source ที่แนบ
4. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
จัดทำ Decision Memo สำหรับผู้บริหารเรื่อง:
"แนวทางลด loan approval turnaround time โดยรักษาคุณภาพการตรวจสอบ"

ให้มี:
- Current situation จาก source ที่แนบ
- แนวปฏิบัติจาก public sources
- Options อย่างน้อย 3 ทาง
- Pros, cons, risks และ KPI
- Recommended pilot 2 สัปดาห์
- สิ่งที่ต้องตรวจสอบเพิ่ม

แสดง citation และแยกข้อมูลภายในออกจากข้อมูลสาธารณะ
```

5. ตอบ clarifying question ของ Researcher โดยไม่เพิ่มข้อมูลลับ
6. เปิด citation อย่างน้อย 3 แหล่ง
7. เปรียบเทียบกับคำตอบจาก Copilot Chat แบบปกติ

## Scenario 2: Analyst สำหรับข้อมูลเชิงปริมาณ

### Practice 1: วิเคราะห์ KPI และทดสอบสมมติฐาน

#### Steps

1. เปิด **Analyst**
2. แนบ `Krungsri_BranchKPI_28days.xlsx`
3. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
วิเคราะห์ KPI ใน workbook นี้เพื่อทดสอบสมมติฐาน:
"จำนวน complaint ที่เพิ่มขึ้นสัมพันธ์กับ loan approval turnaround time ที่สูงขึ้น"

ให้ทำ:
1. ตรวจโครงสร้างและคุณภาพข้อมูล
2. อธิบายวิธีวิเคราะห์
3. แสดงตารางหรือ visualization ที่เหมาะสม
4. สรุปว่าสนับสนุนสมมติฐานหรือไม่
5. ระบุข้อจำกัดและข้อมูลที่ยังขาด

อย่าสรุปว่าเป็นเหตุและผลจาก correlation เพียงอย่างเดียว
```

4. ตรวจชื่อ column, row count และช่วงข้อมูล
5. เปรียบเทียบ finding กับ Copilot ใน Excel
6. บันทึกว่างานใดเหมาะกับ Analyst และงานใดควรทำใน Excel

## Scenario 3: Surveys สำหรับวัดผลการทดลอง

### Practice 1: ออกแบบ Survey จาก AI Use Canvas

#### Steps

1. เปิด **Surveys** ใน Agent Store
2. เลือก success measure จาก AI Use Canvas
3. สร้าง survey สำหรับ pilot group ไม่เกิน 8 คำถาม

#### Prompt Example

```text
สร้าง survey สำหรับวัดผล pilot การใช้ Copilot ช่วยเตรียม Branch Operations Review

ต้องวัด:
- เวลาที่ใช้ก่อนและหลัง
- ความครบถ้วนของ source
- จำนวนจุดที่มนุษย์ต้องแก้
- ความมั่นใจของผู้ใช้
- ปัญหาด้านสิทธิ์หรือข้อมูล

ใช้คำถามแบบ rating และ open text รวมไม่เกิน 8 ข้อ
ห้ามถามข้อมูลส่วนบุคคลที่ไม่จำเป็น
```

4. ตรวจว่าทุกคำถามเชื่อมกับ success measure
5. ดู Preview แต่ไม่ต้องส่ง survey จริง
6. หากไม่มี Surveys ให้ร่างคำถามด้วย Copilot Chat แล้วสร้างแบบฟอร์มตัวอย่างด้วยตนเอง

## Scenario 4: Word, Excel และ PowerPoint Creation Agents

### Practice 1: เปรียบเทียบ Agent กับ In-app Copilot

#### Steps

1. ตรวจว่า **Word Agent**, **Excel Agent** และ **PowerPoint Agent** ปรากฏใน Tools หรือ All agents
2. เลือก Agent 1 ตัว
3. ใช้ source เดียวกับที่ใช้ในแบบฝึกหัดหลัก
4. ขอให้ Agent สร้าง artifact ใหม่
5. เปรียบเทียบกับ artifact ที่สร้างผ่าน Copilot ภายใน app
6. ประเมิน:
   - ความเร็ว
   - ความถูกต้องของ source
   - ความพร้อมแก้ไขต่อใน app
   - ความเหมาะสมของโครงสร้าง
   - งานตรวจของมนุษย์
7. หาก Agent ไม่พร้อม ให้ Trainer แสดง output ตัวอย่างและให้ผู้เรียนทำ comparison review

## Checkpoint

- Researcher ใช้กับงานหลาย source ที่ต้องการรายงานและ citation
- Analyst ใช้กับงานวิเคราะห์ข้อมูล ไม่สรุป causation จาก correlation โดยไม่มีหลักฐาน
- Surveys เชื่อมคำถามกับตัววัดใน AI Use Canvas
- Creation Agent ถูกเปรียบเทียบกับ In-app Copilot ด้วยเกณฑ์เดียวกัน
- ไม่เลือก Agent จากความแปลกใหม่เพียงอย่างเดียว

## Expected Output

- Agent Selection Scorecard: Task | Agent | Strength | Limitation | Human checkpoint
- Researcher Decision Memo หรือ fallback comparison
- Analyst finding หรือ fallback comparison
- Survey preview หรือชุดคำถามตัวอย่าง

## Optional Extension

ให้เพื่อนเลือก Agent คนละตัวกับเรา แต่ใช้โจทย์เดียวกัน แล้วโหวตว่า output ใดพร้อมใช้ที่สุดพร้อมแสดงหลักฐาน

[กลับไป Lab 5](../05-branch-operations-decision-pack/README.md) | [ไป Lab 7](../07-agent-builder-from-ai-use-canvas/README.md)
