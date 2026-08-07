# Final Exercise: AI Use Canvas Experiment Studio

## Exercise Overview

- **เป้าหมาย:** ใช้ AI Use Canvas จาก Day 1 เลือก workflow step ทดลอง Copilot จริง เก็บข้อมูล และปรับ Canvas

ช่วงนี้ไม่มีการสอน feature ใหม่ ผู้เรียนเลือกใช้ Copilot Chat, Microsoft 365 app, Microsoft-built Agent หรือ Agent Builder prototype ที่ทดลองมาแล้ว

## Prerequisites

1. AI Use Canvas และ Human + AI Workflow Map จาก Day 1

## Scenario 1: ออกแบบ First Experiment

### Practice 1: เลือก Workflow Step

#### Steps

1. เปิด AI Use Canvas
2. เลือก workflow step ที่มี pain point ชัดเจน 1 ขั้น
3. เขียน baseline:
   - ปัจจุบันใช้เวลาเท่าไร
   - ใครเป็น owner
4. เลือก Copilot surface ที่จะทดลอง
   - Copilot Chat
   - Word, Excel, PowerPoint, Outlook หรือ Teams
   - Microsoft-built Agent
   - Agent Builder prototype
5. เขียนเหตุผลว่าทำไมเลือกวิธีนี้


## Scenario 2: Run, Observe, Improve

### Practice 1: ทดลองรอบแรก

#### Steps

1. เขียน prompt รอบแรกด้วยภาษาของตัวเอง
2. รันงานกับ source ที่กำหนด
3. ตรวจ output ตาม success measure
4. บันทึก:
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

### Practice 1: เปลี่ยนทฤษฎีเป็นการใช้งานจริง

#### Steps

1. อัปเดต Workflow และ AI role ตามสิ่งที่ทดลองจริง
2. อัปเดต Data และ Source
3. เพิ่ม Human checkpoint และ Guardrail
4. บันทึก baseline และผลการทดลอง
5. ระบุ next experiment ที่เล็กและปลอดภัยกว่าเดิม
6. หากผลไม่ดี ให้บันทึกว่า `ยังไม่ควรใช้` พร้อมเหตุผลได้

## Scenario 4: Share and Reflect

### Practice 1: Reflection 

#### Steps

1. เตรียมการแชร์ 5 ประเด็น
   - Pain point
   - Tool หรือ Agent ที่เลือก
   - Source ที่ใช้
   - หลักฐานจากการทดลอง
   - Human checkpoint และ next experiment
2. แชร์ภายใน 5 นาที
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


[กลับไป Lab 8](../08-m365-app-deep-dive-cards/README.md) | [ทำ Map Tools and Reflect ต่อ](../../04-map-tools-and-reflect/README.md) | [กลับไป Day 2](../../README.md)
