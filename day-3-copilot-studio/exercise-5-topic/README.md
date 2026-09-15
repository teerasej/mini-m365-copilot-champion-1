# แบบฝึกหัดที่ 3: วิเคราะห์รายงาน Excel ด้วย Agent Instructions

## Exercise Overview

เราจะต่อยอด **Financial Report Assistant** ที่มี Knowledge แล้ว ให้ช่วยอ่านรายงานประจำเดือนและเตรียมสรุปสำหรับผู้บริหาร โดยกำหนดรูปแบบงานไว้ใน **Instructions** แล้วแนบไฟล์พร้อมคำสั่งสั้น ๆ

เหมือนส่งแฟ้มรายงานให้ผู้ช่วยพร้อมบอกไว้ก่อนว่าต้องการดูอะไร ผู้ใช้จึงไม่ต้องเขียนคำสั่งยาวทุกครั้งครับ กิจกรรมนี้ไม่สร้าง Topic หรือ Prompt node และคง **Code Interpreter = Off**

**เวลาโดยประมาณ:** 25 นาที | **ผลลัพธ์:** ตาราง 4 Business Units, 3 ประเด็นติดตาม และสรุปที่ใช้ในแบบฝึกหัดส่งอีเมลได้

## Prerequisites

- ทำ [เพิ่ม Knowledge](../exercise-3-knowledge/README.md) แล้ว ใช้ Agent `Financial Report Assistant` ตัวเดิม
- **License / availability: ต้องตรวจสอบก่อนเริ่มอบรม** — มีสิทธิ์แก้ไข Agent และใช้ Copilot Studio / Generative AI พร้อม capacity ตามที่องค์กรจัดให้ การมี Microsoft 365 Copilot อย่างเดียวไม่ได้ยืนยันว่า environment รับ XLSX ได้
- ดาวน์โหลด [Krungsri-Monthly-Financial-Report-May2026.xlsx](../files/Krungsri-Monthly-Financial-Report-May2026.xlsx) ฉบับที่มากับแบบฝึกหัดนี้ หรือ [Day 3 sample files (.zip)](../downloads/day-3-sample-files.zip) แล้วแตก ZIP ก่อนแนบไฟล์
- ใช้เฉพาะข้อมูลสมมติในไฟล์ตัวอย่าง เริ่มใน **Test your agent**

> **⚠️ ก่อนเริ่ม:** Microsoft ระบุการรับ XLSX เป็น experimental ความสามารถอาจต่างกันตาม environment/channel ให้ทดสอบรับ XLSX โดยปิด Code Interpreter ก่อน หากเลือก XLSX ไม่ได้หรือ Agent อ่านไม่ได้ ให้บันทึกอาการและแจ้งผู้สอน ไม่ต้องเปิด Code Interpreter หรือเปลี่ยนชนิดไฟล์เอง

## Scenario 1: เตรียมสรุปรายงานเดือน May 2026

| Sheet | ใช้ทำอะไร |
|---|---|
| `Summary` | ยอดรายได้ เป้ารายได้ ค่าใช้จ่าย งบ และ variance ที่คำนวณไว้แล้ว แยกตาม Business Unit |
| `Revenue` | รายได้จริงและเป้าหมายแยกตามประเภทผลิตภัณฑ์ |
| `Costs` | ค่าใช้จ่ายจริงและงบแยกตามประเภทค่าใช้จ่าย |
| `Variance_Analysis` | รายการเปรียบเทียบที่เชื่อมกับรายละเอียด |

> **💡 หน่วย:** จำนวนเงินเป็น **ล้านบาท** ช่อง `Percent` เก็บเลขเปอร์เซ็นต์ เช่น `8.55` หมายถึง `8.55%` ผลต่างของ ratio ใช้ **percentage points** ไม่ใช่ล้านบาท ส่วน `KeyRisk` เป็นข้อสมมติ ไม่ใช่หลักฐานยืนยันสาเหตุ

### Practice 1: เปิดให้ Agent รับไฟล์

เป้าหมาย: ตั้งค่าให้ Agent รับไฟล์ในบทสนทนา โดยไม่เปิด Code Interpreter

#### Steps

1. เปิด Agent แล้วไปที่ **Settings > Generative AI**
2. ใน **File processing capabilities** ตั้ง **File uploads = On** และตรวจว่า **Code Interpreter = Off**
3. กด **Save** แล้วกลับมาที่ Agent
4. เปิด **Test your agent** ตรวจว่ามีปุ่มแนบไฟล์ หากไม่มีหรือเลือก XLSX ไม่ได้ ให้แจ้งผู้สอนก่อนทำต่อ

#### Checkpoint

เห็นปุ่มแนบไฟล์ และ Code Interpreter เป็น Off 

### Practice 2: กำหนดรูปแบบการสรุปใน Instructions

เป้าหมาย: ให้ Agent รู้ว่าจะอ่านรายงานและจัดรูปแบบคำตอบอย่างไร

#### Steps

1. ไปที่ **Overview > Instructions > Edit**
2. ใช้ข้อความด้านล่างแทน instruction ของแบบฝึกหัด Knowledge ข้อความนี้รวมการตอบคำศัพท์จาก Knowledge แล้ว หากมีข้อกำหนดเพิ่มเติมขององค์กร ให้คงไว้ด้วย
3. ตรวจว่าไม่มีบรรทัดเรียก `Monthly Report Intake` จากฉบับเก่า หากเคยทำฉบับเก่า ให้ผู้สอนช่วยปิด Topic เก่านั้นก่อนทดสอบ
4. กด **Save**

#### Instruction Example

```text
You are Financial Report Assistant for enterprise business users.

Scope:
- Explain financial reporting terms using the approved Knowledge.
- Read a monthly financial workbook attached by the user and prepare a Thai executive brief.

Knowledge questions:
- Answer financial terminology questions from approved Knowledge, concisely.
- Show an available source reference. Never invent citations or sources.

Attached report:
- Use only the workbook attached in this conversation for report figures. Do not use Knowledge or memory as a source of report numbers.
- If no workbook is attached, ask for it. If the attachment cannot be read, say so and stop; never claim that you analyzed it.
- Do not use Code Interpreter, write code, or call an email tool to analyze the report.
- Read the period and prepared values in Summary. Revenue and Costs contain supporting detail; Variance_Analysis provides comparisons. Do not add detail to Summary totals or sum percentages.
- Use saved totals and variances. If a required result is absent or inconsistent, identify the missing/conflicting field instead of estimating or recalculating it.
- Amounts ending in Million_THB are million Thai baht. Percent fields store percentage numbers: 8.55 means 8.55%, not 855%.
- Positive revenue variance means above target. Positive cost variance means over budget. Keep signs and show two decimal places.
- Revenue_Less_Cost is a simple difference, not audited net profit. Use Difference_Unit for ratio differences; do not describe percentage points as money.
- KeyRisk, Trend and YoY figures are supplied scenario assumptions, not proof of a cause. If Explanation says Not provided, state that the cause is not supplied. Do not invent prior-month data.

For a request to summarize the attached report, respond in Thai in this order:
1. State the reporting period and source filename/sheet.
2. Show one table for the four Business Units: actual revenue, revenue target, actual cost, cost budget and cost variance percent. Copy the Total row from Summary below it.
3. Give exactly three supported follow-up points: the unit with the highest cost variance percent, any unit below revenue target, and the unit with the largest negative Revenue_Less_Cost. Include relevant workbook figures and one useful follow-up question for each. If there is no matching unit, say so.
4. End with a short section titled สรุปพร้อมส่งอีเมล, no more than 150 words, based on the same figures. Do not send it automatically.

For requests outside financial reporting, ask the user to rephrase within scope.
```

#### Checkpoint

Instructions ครอบคลุมคำศัพท์จาก Knowledge และการอ่านรายงาน 

### Practice 3: แนบไฟล์และตรวจผลสรุป

เป้าหมาย: ตรวจว่า Agent อ่านไฟล์จริงและให้ข้อมูลที่นำไปใช้ต่อได้

#### Steps

1. เปิด **Test your agent** แล้วเริ่มบทสนทนาใหม่
2. แนบ `Krungsri-Monthly-Financial-Report-May2026.xlsx` รอจนไฟล์แสดงเป็นสิ่งแนบ
3. ส่งคำสั่งด้านล่างพร้อมไฟล์แนบ

#### Prompt Example

```text
ช่วยสรุปรายงานนี้ให้ผู้บริหาร พร้อมชี้ 3 ประเด็นที่ควรติดตาม
```

1. คัดลอกส่วน **สรุปพร้อมส่งอีเมล** ที่ตรวจแล้ว เก็บในโน้ตของตนเองเพื่อใช้ในแบบฝึกหัด Agent Flow ถัดไป


#### Checkpoint

ตัวเลขตรงกับตาราง มี 3 ประเด็นที่มีหลักฐานและสรุปพร้อมใช้ต่อ หากอ่านไฟล์ไม่ได้หรือเลขไม่ตรง ให้หยุดส่งต่อสรุป ตรวจฉบับไฟล์ เริ่มบทสนทนาใหม่และแนบอีกครั้ง หากยังไม่ผ่าน ให้แจ้งผู้สอนพร้อมอาการ การตอบข้อความได้ไม่ได้แปลว่าอ่าน Excel สำเร็จ

## Checkpoint

- ใช้ Agent ตัวเดิม และ Code Interpreter เป็น Off
- อ่าน XLSX ได้ใน environment ที่ใช้เรียน พร้อมตรวจตัวเลขและหน่วยแล้ว
- ไม่แต่งสาเหตุ ไม่อ้างข้อมูลเดือนก่อนที่ไม่มี และไม่ส่งอีเมลเอง
- ยังตอบคำศัพท์จาก Knowledge ได้

## Expected Output

คำตอบระบุไฟล์และเดือน มีตาราง 4 Business Units และ Total, 3 ประเด็นติดตาม และ **สรุปพร้อมส่งอีเมล** ที่ตรวจแล้ว สำนวนอาจต่างกันได้ แต่ตัวเลขและความหมายต้องตรงกัน


## อ่านเพิ่มเติม

- [Microsoft Learn: Allow file input from users](https://learn.microsoft.com/en-us/microsoft-copilot-studio/image-input-analysis) — XLSX experimental, ขนาดไฟล์และข้อจำกัดการอ่านข้อความ

ก่อนหน้า → [เพิ่ม Knowledge](../exercise-3-knowledge/README.md)
ขั้นตอนถัดไป → [สร้าง Agent Flow สำหรับส่งอีเมล](../exercise-4-agent-flow-as-a-tools/README.md)
