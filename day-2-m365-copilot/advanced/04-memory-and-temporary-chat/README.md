# Advanced Exercise: Memory, Custom Instructions และ Temporary Chat

## Exercise Overview

แบบฝึกหัดนี้ช่วยให้พวกเราแยก 3 เรื่องที่มักสับสนกัน:

- **Current chat context:** สิ่งที่คุยและแนบอยู่ในห้อง Chat ปัจจุบัน
- **Copilot Memory และ Custom instructions:** การทำงานที่อาจนำ context ไปใช้ข้ามห้อง Chat
- **Source grounding:** ไฟล์ email meeting หรือ Page ที่พวกเราเลือกให้ Copilot ใช้

Copilot Memory เป็น feature ที่อาจยังไม่พร้อมในบาง tenant ให้ใช้ข้อมูลสมมติเท่านั้นและลบ test memory หลังจบ Lab

## Prerequisites

1. เปิด [Microsoft 365 Copilot Chat](https://m365.cloud.microsoft/chat)
2. ตรวจเมนู **Settings > Personalization**
3. ห้ามใช้ข้อมูลส่วนบุคคล ข้อมูลลูกค้า รหัสผ่าน ความลับ หรือข้อมูลสุขภาพในการทดสอบ
4. หากไม่เห็น Memory หรือ Custom instructions ให้ใช้ fallback ใน Scenario 3

## Scenario 1: ทดลอง Custom Instructions

### Practice 1: ตั้งค่าความชอบแบบปลอดภัย

#### Steps

1. เปิด **Settings > Personalization**
2. เปิดส่วน **Custom instructions**
3. เพิ่ม instruction สมมติต่อไปนี้

#### Instruction Example

```text
เมื่อฉันขอสรุปงาน:
- ใช้ภาษาไทยแบบมืออาชีพ
- เริ่มด้วย Executive summary ไม่เกิน 3 bullets
- ปิดท้ายด้วยคำถามที่ต้องให้มนุษย์ตัดสินใจ
```

4. บันทึกการตั้งค่า
5. กด **New chat**
6. ขอให้ Copilot สรุปสถานการณ์ตัวอย่างสั้น ๆ

#### Prompt to Copy-Paste

```text
ช่วยค้นหาข้อมูลสาธารณะจากอินเทอร์เน็ตเกี่ยวกับบริษัทลูกค้าของฉัน (เช่น ข่าวล่าสุด ทิศทางธุรกิจ และความท้าทายที่อาจเกี่ยวข้องกับการทำงาน) แล้วสรุปให้สั้น กระชับ เพื่อใช้เตรียมคุยกับทีมภายใน
```

7. ตรวจว่ารูปแบบตรงกับ instruction หรือไม่

## Scenario 2: เปรียบเทียบ Memory กับ Temporary Chat

### Practice 1: สร้าง Test Memory

#### Steps

1. ใน Chat ปกติ บอกความชอบสมมติต่อไปนี้

#### Prompt Example

```text
สำหรับการทดลองใน workshop นี้ ให้จำไว้ว่าฉันต้องการ
decision memo ที่มี 3 options พร้อม pros, cons และ human checkpoint
```

2. ถาม Copilot ว่าได้บันทึกหรือจดจำอะไรไว้

#### Prompt to Copy-Paste (Step 2)

```text
บอกหน่อยว่า ได้จำสิิ่งที่ฉันต้องการอะไรจากบทสนทนานี้ไว้บ้าง และจะใช้สิ่งนั้นกับคำตอบถัดไปอย่างไร
```

3. กด **New chat**
4. ขอให้สร้าง decision memo โดยไม่บอกรูปแบบซ้ำ

#### Prompt to Copy-Paste 

```text
ช่วยจัดทำ decision memo สำหรับการเลือกแนวทางนำ AI มาใช้ในงานบริการลูกค้าของบริษัท 
```

5. ตรวจสอบว่า Copilot ใช้สิ่งที่มีการจดจำไว้ใน chatเดิมหรือไม่

### Practice 2: Temporary Chat

#### Steps

1. เลือก **Start a new temporary chat** จากปุ่มด้านบนขวาของหน้า chat
2. ขอให้สร้าง decision memo จากสถานการณ์สมมติ

#### Prompt to Copy-Paste (Step 2)

```text
ช่วยจัดทำ decision memo สำหรับการเลือกแนวทางนำ AI มาใช้ในงานบริการลูกค้าของบริษัท 
```

3. ตรวจว่าความชอบจาก Memory ถูกนำมาใช้หรือไม่
4. ปิด Temporary Chat
5. ตรวจว่า Chat นี้ไม่ปรากฏใน chat history ของผู้ใช้

### Practice 3: ลบข้อมูลทดลอง

#### Steps

1. กลับไป **Settings > Personalization**
2. เปิดรายการ saved memories
3. ลบ test memory ที่สร้างใน Lab นี้
4. ลบ Custom instructions ตัวอย่าง หรือคืนค่าเดิมของผู้เรียน

#### Prompt to Copy-Paste (Verification)

```text
เพื่อยืนยันการลบข้อมูลทดลอง ช่วยสรุปว่าตอนนี้คุณยังมี memory หรือความชอบที่บันทึกไว้จาก workshop นี้หรือไม่
```

5. ยืนยันว่าไม่มีข้อมูล workshop ค้างอยู่โดยไม่จำเป็น

## Scenario 3: Fallback เมื่อ Tenant ยังไม่มี Memory

### Practice 1: จำลองผลด้วย Chat ปกติและ New Chat

#### Steps

1. ใน Chat ห้องแรก ให้กำหนดรูปแบบ output และขอให้สร้าง decision memo

#### Prompt to Copy-Paste (Step 1)

```text
สำหรับแชตนี้เท่านั้น ให้ตอบในรูปแบบ decision memo ที่มี 3 ทางเลือก แต่ละทางเลือกต้องมี pros, cons และ human checkpoint จากนั้นช่วยจัดทำ decision memo สำหรับการนำ AI ไปใช้ในงานบริการลูกค้า
```

2. ถามต่อในห้องเดิมโดยไม่บอกรูปแบบซ้ำ

#### Prompt to Copy-Paste (Step 2)

```text 
 ช่วยทำ decision memo อีก 1 เรื่อง: การใช้ AI เพื่อลดเวลาทำรายงานประจำสัปดาห์
```

3. กด **New chat** และถามงานใหม่โดยไม่บอกรูปแบบ

#### Prompt to Copy-Paste (Step 3)

```text
ช่วยทำ decision memo เรื่องการใช้ AI เพื่อปรับปรุงการตอบคำถามลูกค้า
```

4. เปรียบเทียบว่าข้อมูลใดอยู่เฉพาะ conversation context
5. สร้าง prompt template ใน Prompt Gallery เพื่อใช้แทน Memory อย่างควบคุมได้

## Checkpoint

- แยก Memory, conversation context และ source grounding ได้
- Temporary Chat ไม่ใช่วิธีหลีกเลี่ยง policy หรือการกำกับดูแลขององค์กร
- ลบ test memory และคืนค่า Custom instructions หลังจบ

## Expected Output

- ตารางเปรียบเทียบ Normal chat / New chat / Temporary chat
- ตัวอย่าง Custom instructions ที่ปลอดภัย
- หลักฐานว่าลบ test memory แล้ว หรือผลจาก fallback

## Next Steps

[กลับไป Lab 3](../03-pages-and-notebooks/README.md) | [ไป Lab 5](../05-branch-operations-decision-pack/README.md)
