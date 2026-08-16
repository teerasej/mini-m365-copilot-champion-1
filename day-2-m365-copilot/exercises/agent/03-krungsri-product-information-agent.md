# Exercise 3: สร้าง Krungsri Product Information Agent

แบบฝึกหัดสุดท้ายนี้ พลจะพาพวกเรากลับมาใช้ flow แบบเดียวกับ Agent ตัวแรก แต่เพิ่ม **Knowledge** จากเว็บไซต์สาธารณะและเอกสาร PDF เพื่อให้ Agent ช่วยค้นและอธิบายข้อมูลผลิตภัณฑ์ที่มี source รองรับครับ

ข้อความที่ Agent ตอบอาจแตกต่างจากตัวอย่าง ให้เราตรวจว่า Agent ใช้ source ที่กำหนดและยอมรับเมื่อ source ไม่มีคำตอบนะครับ

> **License:** ต้องใช้บัญชีที่เข้าถึง Microsoft 365 Copilot และ Agent Builder ได้ การเพิ่มเว็บไซต์หรือไฟล์เป็น Knowledge อาจถูกจำกัดโดย policy ขององค์กร

## Prerequisites

- ทำ [Exercise 2: Vendor Comparison Advisor](02-vendor-comparison-advisor.md)
- ดาวน์โหลด [`Krungsri_5_Banking_Products_Quick_Guide.pdf`](../../files/Krungsri_5_Banking_Products_Quick_Guide.pdf)

## Scenario 1: ตอบคำถามผลิตภัณฑ์จาก source ที่กำหนด

### Practice 1: สร้าง Agent และเพิ่ม Knowledge

**Primary target:** สร้าง Agent ที่ใช้เว็บไซต์ Krungsri และ PDF เป็นแหล่งข้อมูลหลักสำหรับตอบคำถามผลิตภัณฑ์

#### Steps

1. เลือก **New agent** แล้วเปิด **Describe**
2. วางข้อความต่อไปนี้

   ```text
   สร้าง Agent ชื่อ "Krungsri Product Guide"

   หน้าที่:
   - ช่วยพนักงานค้นและอธิบายข้อมูลผลิตภัณฑ์จาก Knowledge ที่กำหนด
   - ตอบสั้น ชัด และระบุ source ที่ใช้
   - แยกข้อมูลที่พบจริงออกจากคำอธิบายทั่วไป
   - ถ้า source ไม่มีข้อมูล ให้บอกว่าไม่พบและแนะนำให้ตรวจหน้าผลิตภัณฑ์ล่าสุด

   ข้อจำกัด:
   - ห้ามรับรองผลอนุมัติสินเชื่อ
   - ห้ามสร้างอัตราดอกเบี้ย ค่าธรรมเนียม หรือเงื่อนไขที่ source ไม่ได้ระบุ
   - ห้ามให้คำแนะนำทางการเงินเฉพาะบุคคล
   ```

3. เปิด **Configure** แล้วเลื่อนไปที่ **Knowledge**
4. เพิ่มเว็บไซต์ต่อไปนี้

   ```text
   https://www.krungsri.com/
   ```

5. กด **Upload** หรือ **Browse** แล้วเพิ่ม `Krungsri_5_Banking_Products_Quick_Guide.pdf`
6. เปิด **Only use specified sources** เพื่อให้ Agent ให้ความสำคัญกับ source ที่เราเพิ่ม

   > **⚠️ Note:** ตัวเลือกนี้ช่วยจัดลำดับความสำคัญของ Knowledge แต่ไม่ได้ปิด general AI knowledge ได้ทั้งหมด ดังนั้นเรายังต้องตรวจคำตอบและ source ทุกครั้ง

7. เพิ่ม starter prompt

   ```text
   แนะนำผลิตภัณฑ์ 5 รายการแบบสั้น ๆ
   ```

#### Checkpoint

- Agent มีเว็บไซต์และ PDF อยู่ใน Knowledge
- Instructions ระบุว่าไม่ให้เดาตัวเลข เงื่อนไข หรือผลอนุมัติ

### Practice 2: ทดสอบคำตอบที่มีและไม่มีข้อมูลรองรับ

**Primary target:** ทดสอบว่า Agent ใช้ source ถูกต้องและไม่แต่งคำตอบเมื่อ Knowledge ไม่มีข้อมูล

#### Steps

1. เปิด **Try it** แล้วถามคำถามต่อไปนี้ทีละข้อ

   ```text
   ผลิตภัณฑ์ 5 รายการมีอะไรบ้าง และแต่ละรายการมีวัตถุประสงค์ต่างกันอย่างไร
   ```

   ```text
   อธิบายความต่างด้านวัตถุประสงค์ระหว่าง Mee Tae Dai Savings และ Krungsri iFIN
   ```

   ```text
   ค่าธรรมเนียมล่าสุดของทุกผลิตภัณฑ์เท่าไหร่
   ```

2. ตรวจว่า Agent ระบุ source อ้างอิงสำหรับคำตอบข้อแรกและข้อสอง และบอกว่าไม่พบข้อมูลสำหรับค่าธรรมเนียมในข้อสาม
3. ถ้าคำตอบกว้างเกินไป ให้ปรับ Instructions ให้ตอบจาก PDF หรือหน้าเว็บไซต์ที่เกี่ยวข้องก่อน
4. เมื่อทดสอบจนพอใจแล้ว กด **Create**
5. เก็บการ Share เป็น **Only you** ก่อน หาก Admin อนุญาตให้แชร์ ให้ตรวจ source และสิทธิ์ของผู้รับก่อนเลือก **Specific users in your organization**

   ![หน้าต่างยืนยันว่า Agent ถูกสร้างและยังแชร์แบบ Only you](../../images/agent/2025-08-24_13-42-42.png)

#### Checkpoint

- คำตอบข้อแรกและข้อสองสอดคล้องกับ PDF
- คำถามที่ source ไม่พอได้รับคำตอบว่าไม่พบหรือให้ตรวจข้อมูลล่าสุด
- Agent ไม่รับรองผลอนุมัติหรือให้คำแนะนำทางการเงินเฉพาะบุคคล

## Expected Output

- `Krungsri Product Guide` หนึ่ง Agent
- ผลทดสอบอย่างน้อยหนึ่งคำถามที่ตอบได้จาก Knowledge และหนึ่งคำถามที่ Agent ต้องยอมรับว่าข้อมูลไม่พอ


[← กลับหน้าหลัก Agent Builder](README.md) | [จบชุด Agent Builder และกลับไป Day 2](../../README.md)
