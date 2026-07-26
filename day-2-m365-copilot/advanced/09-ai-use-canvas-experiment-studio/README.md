# Final Exercise: AI Use Canvas Experiment Studio

## Exercise Overview

- **เวลา:** 14:45–16:00
- **เป้าหมาย:** ใช้ AI Use Canvas จาก Day 1 เลือก workflow step ทดลอง Copilot จริง เก็บหลักฐาน และปรับ Canvas
- **ผลลัพธ์:** experiment record, prompt before/after, updated AI Use Canvas และ reflection 1 นาที

ช่วงนี้ไม่มีการสอน feature ใหม่ ผู้เรียนเลือกใช้ Copilot Chat, Microsoft 365 app, Microsoft-built Agent หรือ Agent Builder prototype ที่ทดลองมาแล้ว

## Prerequisites

1. AI Use Canvas และ Human + AI Workflow Map จาก Day 1
2. ผลงานจากแบบฝึกหัดหลัก Day 2
3. ผลงานหรือ scorecard จาก Advanced Lab อย่างน้อย 1 รายการ
4. ข้อมูลตัวอย่างที่ปลอดภัยและได้รับอนุญาต

## Scenario 1: ออกแบบ First Experiment

### Practice 1: เลือก Workflow Step

#### Steps

1. เปิด AI Use Canvas
2. เลือก workflow step ที่มี pain point ชัดเจน 1 ขั้น
3. เขียน baseline:
   - ปัจจุบันใช้เวลาเท่าไร
   - มีข้อผิดพลาดหรือ rework แบบใด
   - ใครเป็น owner
4. เลือก Copilot surface ที่จะทดลอง
   - Copilot Chat
   - Word, Excel, PowerPoint, Outlook หรือ Teams
   - Microsoft-built Agent
   - Agent Builder prototype
5. เขียนเหตุผลว่าทำไมเลือกวิธีนี้

### Practice 2: ตั้ง Success Measure และ Guardrail

#### Steps

1. เลือก success measure อย่างน้อย 2 ข้อ
   - เวลาที่ใช้
   - ความครบถ้วน
   - ความถูกต้อง
   - จำนวนจุดที่ต้องแก้
   - ความง่ายในการส่งต่องาน
2. ระบุ source ที่ใช้
3. ระบุข้อมูลที่ห้ามใช้
4. ระบุ human checkpoint ก่อน output ถูกส่งหรือใช้ตัดสินใจ
5. เขียนเงื่อนไขหยุดทดลอง หากข้อมูลหรือสิทธิ์ไม่พร้อม

## Scenario 2: Run, Observe, Improve

### Practice 1: ทดลองรอบแรก

#### Steps

1. เขียน prompt รอบแรกด้วยภาษาของตัวเอง
2. บันทึก prompt ก่อนส่ง
3. รันงานกับ source ที่กำหนด
4. ตรวจ output ตาม success measure
5. บันทึก:
   - สิ่งที่ Copilot ทำได้ดี
   - สิ่งที่ผิดหรือขาด
   - งานที่มนุษย์ยังต้องทำ
   - เวลาที่ใช้

### Practice 2: ปรับ Prompt หรือเปลี่ยน Tool

#### Steps

1. ปรับ prompt ด้วย Goal, Context, Source, Output และ Quality check
2. หากปัญหาเกิดจาก tool ไม่เหมาะ ให้เปลี่ยน app หรือ Agent พร้อมบันทึกเหตุผล
3. รันทดลองรอบที่สอง
4. ใช้ source และเกณฑ์เดิมเพื่อให้เปรียบเทียบได้
5. เปรียบเทียบผลรอบแรกและรอบที่สอง

#### Prompt Template

```text
Goal: [งานที่ต้องการให้เสร็จ]

Context: [ผู้รับ เป้าหมายทางธุรกิจ และข้อจำกัด]

Sources: [ไฟล์ email meeting Page หรือข้อมูลที่อนุญาต]

Output: [รูปแบบ ความยาว โครงสร้าง และภาษา]

Quality check:
- [สิ่งที่ต้องตรวจ]
- [สิ่งที่ห้ามเดา]
- [กรณีที่ต้องถามมนุษย์]
```

## Scenario 3: อัปเดต AI Use Canvas

### Practice 1: เปลี่ยน Assumption เป็น Evidence

#### Steps

1. อัปเดต Workflow และ AI role ตามสิ่งที่ทดลองจริง
2. อัปเดต Data และ Source
3. เพิ่ม Human checkpoint และ Guardrail
4. บันทึก baseline และผลการทดลอง
5. ระบุ next experiment ที่เล็กและปลอดภัยกว่าเดิม
6. หากผลไม่ดี ให้บันทึกว่า `ยังไม่ควรใช้` พร้อมเหตุผลได้

## Scenario 4: Share and Reflect

### Practice 1: Reflection 1 นาที

#### Steps

1. เตรียมการแชร์ 5 ประเด็น
   - Pain point
   - Tool หรือ Agent ที่เลือก
   - Source ที่ใช้
   - หลักฐานจากการทดลอง
   - Human checkpoint และ next experiment
2. แชร์ภายใน 1 นาที
3. ให้เพื่อนถาม 1 คำถามเกี่ยวกับความถูกต้องหรือความเสี่ยง
4. บันทึก feedback ลง Canvas
5. เขียนหนึ่งประโยคว่าแนวคิดนี้ควรไปต่อเป็น Copilot workflow หรือ Agent ใน Day 3 หรือไม่

## Checkpoint

- ใช้ workflow จริงจาก AI Use Canvas
- เปรียบเทียบอย่างน้อย 2 รอบด้วยเกณฑ์เดียวกัน
- แยกความรู้สึกประทับใจออกจากหลักฐาน
- มี human checkpoint และ owner
- Canvas ถูกปรับจากผลทดลอง ไม่ใช่จากรายการ feature

## Expected Output

- Experiment record รอบแรกและรอบสอง
- Prompt before/after
- AI Use Canvas ฉบับอัปเดต
- Reflection 1 นาทีและ next experiment

## Optional Extension

จับคู่กับเพื่อนที่เลือก tool ต่างกัน แล้วออกแบบ experiment ครั้งถัดไปเพื่อพิสูจน์ว่า workflow แบบใดให้ผลดีกว่า

[กลับไป Lab 8](../08-m365-app-deep-dive-cards/README.md) | [ทำ Map Tools and Reflect ต่อ](../../04-map-tools-and-reflect/README.md) | [กลับไป Day 2](../../README.md)
