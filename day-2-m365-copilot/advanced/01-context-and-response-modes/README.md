# Advanced Exercise: Context, Source และ Response Modes

## Exercise Overview

แบบฝึกหัดนี้ช่วยให้พวกเราแยกความแตกต่างระหว่าง prompt, conversation context, source และ response mode แล้ววัดผลจากคำตอบจริง

ให้นึกว่า context เป็นพื้นที่บนโต๊ะทำงาน: การวางเอกสารที่เกี่ยวข้องบนโต๊ะช่วยให้ทำงานได้ดี แต่การวางทุกอย่างรวมกันอาจทำให้หาเรื่องสำคัญยากขึ้น

## Prerequisites

1. เปิด [Microsoft 365 Copilot Chat](https://m365.cloud.microsoft/chat)
2. เปิด **Work IQ**
3. มีไฟล์ `Krungsri_BranchKPI_28days.xlsx` และ `Krungsri_BranchOps_Report_Source.docx` ใน OneDrive
4. ใช้ข้อมูลตัวอย่างเท่านั้น

## Scenario 1: เปรียบเทียบผลลัพธ์เมื่อกำหนด Source

ทีมบริหารต้องการทราบ 3 ประเด็นที่ควรเร่งแก้ไข แต่คำถามเดียวกันอาจให้ผลต่างกันตาม source ที่ Copilot ได้รับ

### Practice 1: เริ่มจาก Prompt ที่ยังไม่ระบุ Source

#### Steps

1. กด **New chat**
2. เลือก **Auto**
3. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
สรุป 3 ปัญหาการดำเนินงานที่ผู้บริหารควรเร่งแก้ไข พร้อมแนะนำ next action
```

4. บันทึกว่าคำตอบอ้างอิงข้อมูลใด มีตัวเลขหรือ citation หรือไม่
5. อย่าเพิ่งตัดสินว่าคำตอบถูกต้อง

### Practice 2: ระบุ Source ที่ต้องใช้

#### Steps

1. กด **New chat**
2. เปิด **Work IQ**
3. พิมพ์ `/` และเลือก `Krungsri_BranchKPI_28days.xlsx`
4. พิมพ์ `/` อีกครั้งและเลือก `Krungsri_BranchOps_Report_Source.docx`
5. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
Goal: ระบุ 3 ปัญหาการดำเนินงานที่ผู้บริหารควรเร่งแก้ไข

Context: เรากำลังเตรียมการประชุม Branch Operations Review

Sources: ใช้เฉพาะไฟล์ที่แนบใน prompt นี้

Output: สร้างตาราง Issue | Evidence | Business impact | Recommended next action

Quality check:
- แสดงชื่อ source ของทุกตัวเลข
- หากข้อมูลขัดแย้งกันให้ระบุทั้งสองค่า
- หากไม่มีหลักฐานให้เขียนว่า "ต้องตรวจสอบเพิ่ม" และห้ามเดา
```

6. เปิด citation หรือ source link อย่างน้อย 2 จุด
7. เปรียบเทียบคำตอบกับข้อมูลในไฟล์ต้นฉบับ

### Practice 3: ทดสอบ Context ที่มีข้อมูลรบกวน

#### Steps

1. ทำสำเนา prompt จาก Practice 2
2. เพิ่มไฟล์ที่ไม่เกี่ยวข้อง 1 ไฟล์จากชุด workshop
3. ส่ง prompt เดิมอีกครั้ง
4. ตรวจว่า Copilot ใช้ข้อมูลที่ไม่เกี่ยวข้องหรือทำให้คำตอบกว้างขึ้นหรือไม่
5. นำ source ที่ไม่จำเป็นออก แล้วทดลองอีกครั้ง

## Scenario 2: เลือก Response Mode ให้ตรงกับงาน

Response mode เหมือนการเลือกช่องชำระเงิน: งานง่ายควรไปช่องด่วน แต่งานที่ต้องเทียบหลายหลักฐานควรใช้ช่องที่ตรวจละเอียดกว่า

### Practice 1: Quick response

#### Steps

1. กด **New chat**
2. เลือก **Quick response**
3. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
ปรับข้อความนี้ให้สุภาพและกระชับไม่เกิน 3 บรรทัด:
"กรุณาส่งข้อมูล KPI ที่ยังไม่ครบภายในวันนี้ เพราะทีมต้องทำรายงานต่อ"
```

4. บันทึกความเร็ว ความกระชับ และงานแก้ไขที่ยังเหลือ

### Practice 2: Think deeper

#### Steps

1. กด **New chat**
2. เลือก **Think deeper**
3. แนบไฟล์ KPI และรายงานต้นฉบับ
4. ส่ง prompt ต่อไปนี้

#### Prompt Example

```text
วิเคราะห์ว่าควรให้ความสำคัญกับ complaint, loan approval turnaround time
หรือ cross-sell conversion เป็นอันดับแรก

เปรียบเทียบผลกระทบ ความเร่งด่วน ความน่าเชื่อถือของหลักฐาน
และความเป็นไปได้ในการแก้ไขภายใน 2 สัปดาห์
สรุป recommendation พร้อมข้อโต้แย้งที่ผู้บริหารอาจถาม
```

5. ตรวจ reasoning จากหลักฐาน ไม่ให้ยอมรับคำตอบเพราะดูละเอียดเพียงอย่างเดียว

### Practice 3: Auto

#### Steps

1. กด **New chat**
2. เลือก **Auto**
3. ใช้ prompt จาก Practice 2 อีกครั้ง
4. เปรียบเทียบกับ Think deeper ในหัวข้อ ความครบถ้วน ความถูกต้อง และเวลาที่ใช้
5. เขียนกฎเลือก mode ของตัวเอง 1 ประโยค

## Checkpoint

- คำตอบที่ใช้ตัดสินใจระบุ source และตรวจ citation แล้ว
- ผู้เรียนอธิบายได้ว่า context ที่มากขึ้นไม่ได้แปลว่าดีขึ้นเสมอ
- เลือก Quick response สำหรับงานตรงไปตรงมา และ Think deeper สำหรับงานวิเคราะห์ซับซ้อน
- ไม่อ้างตัวเลข context window หรือ token limit ที่ตรวจสอบไม่ได้จากหน้าจอผู้ใช้

## Expected Output

- ตารางเปรียบเทียบ No source / Focused sources / Distracting source
- ตารางเปรียบเทียบ Auto / Quick response / Think deeper
- กฎส่วนตัวสำหรับเลือก source และ response mode

## Optional Extension

สร้าง summary ที่ผ่านการตรวจแล้ว 1 หน้า แล้วใช้เป็น context แบบย่อในห้อง Chat ใหม่ เปรียบเทียบกับการแนบ source หลายไฟล์โดยตรง

[กลับไป Advanced Labs](../README.md) | [ไป Lab 2](../02-prompt-gallery-team-library/README.md)
