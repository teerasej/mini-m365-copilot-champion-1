# Exercise 1: สร้าง Proposal Review Coach

ในแบบฝึกหัดแรก เราจะสร้าง Agent ที่ช่วยผู้บริหารอ่าน project proposal และเตรียมประเด็นสำหรับตัดสินใจ โดยเราจะได้ลองส่วนสำคัญของ Agent Builder ตั้งแต่ **Describe**, **Configure**, **Try it** จนถึง **Create** ครับ

> **License:** ต้องใช้บัญชีที่เข้าถึง Microsoft 365 Copilot และ Agent Builder ได้

## Prerequisites

- ดาวน์โหลด [`Branch_Service_Modernization_Proposal.docx`](../../files/Branch_Service_Modernization_Proposal.docx)
- เปิด [Microsoft 365 Copilot](https://m365copilot.com/) ด้วยบัญชีองค์กร

## Scenario 1: ผู้บริหารต้องการตรวจ project proposal

### Practice 1: สร้างและกำหนดขอบเขตของ Agent

**Primary target:** สร้าง Agent ที่เปลี่ยน project proposal ให้เป็น executive decision brief โดยไม่ตัดสินใจแทนผู้บริหาร

#### Steps

1. จากเมนูด้านซ้าย เลือก **New agent** หรือ **Create agent** ตามหน้าจอขององค์กร

   ![หน้าจอ Agent Builder ที่แบ่งพื้นที่ Describe หรือ Configure และ Try it](<../../images/agent/2025-08-24_13-38-18 copy.png>)

2. เปิดส่วน **Describe** แล้ววางข้อความต่อไปนี้

   ```text
   สร้าง Agent ชื่อ "Proposal Review Coach"

   หน้าที่:
   - วิเคราะห์ project proposal ที่ผู้ใช้แนบมา
   - สรุป objective, expected benefit, cost, timeline, risk, dependency และ decision requested
   - แยกข้อมูลเป็น Fact, Assumption และ Missing information
   - สร้าง Executive Decision Brief ที่อ่านง่ายสำหรับผู้บริหาร
   - ระบุคำถามที่ควรถาม project owner ก่อนตัดสินใจ

   ข้อจำกัด:
   - ห้ามสร้างตัวเลขหรือข้อเท็จจริงที่ไม่มีในเอกสาร
   - ห้ามอนุมัติหรือปฏิเสธโครงการแทนผู้บริหาร
   - ถ้าข้อมูลไม่พอ ให้ระบุว่าไม่พบข้อมูลและเสนอคำถามติดตาม
   ```

3. เปิด **Configure** แล้วตรวจ **Name**, **Description** และ **Instructions** ที่ Agent Builder เตรียมให้
4. ถ้า instruction ยังไม่ชัด ให้แก้เฉพาะส่วนที่เกี่ยวกับขอบเขต รูปแบบคำตอบ และสิ่งที่ห้ามเดา
5. เพิ่ม starter prompt เช่น

   ```text
   วิเคราะห์ proposal ที่แนบมาและสร้าง Executive Decision Brief ภาษาไทย
   ```

6. เปิด **Try it** เพื่อตรวจว่า Agent พร้อมรับคำถาม แล้วกด **Create**

#### Checkpoint

- Agent มีหน้าที่ชัดเจน และยังให้มนุษย์เป็นผู้ตัดสินใจขั้นสุดท้าย
- Instructions ระบุวิธีจัดการเมื่อ source ไม่มีข้อมูล

### Practice 2: แนบ proposal และตรวจผลวิเคราะห์

**Primary target:** ใช้ Agent วิเคราะห์ proposal หนึ่งไฟล์และตรวจว่าผลลัพธ์อ้างอิงข้อมูลจริงจากเอกสาร

#### Steps

1. เปิด Agent ที่เพิ่งสร้าง
2. กดปุ่ม **+** หรือ **Add work content** แล้วแนบ `Branch_Service_Modernization_Proposal.docx`
3. ส่ง prompt ต่อไปนี้

   ```text
   วิเคราะห์ proposal ที่แนบมาและสร้าง Executive Decision Brief ภาษาไทย

   ให้มีหัวข้อ:
   1. Decision requested
   2. Business value และ success measures
   3. Cost และ timeline
   4. Key risks และ dependencies
   5. Missing information
   6. Questions for project owner

   แยก Fact, Assumption และ Missing information ให้ชัด และอย่าตัดสินใจแทนผู้บริหาร
   ```

4. ตรวจคำตอบเทียบกับไฟล์ โดยเฉพาะ budget, timeline และข้อมูลที่ proposal ยังไม่ได้ระบุ
5. ถ้า Agent เดาข้อมูล ให้บอก Agent ว่าข้อใดไม่มีหลักฐาน แล้วทดลองสั่งใหม่

#### Checkpoint

- ตัวเลขสำคัญตรงกับ proposal
- Agent พบช่องว่างเรื่อง owner, privacy review หรือ network evidence อย่างน้อยหนึ่งรายการ
- คำตอบระบุสิ่งที่ไม่ทราบแทนการเดา

## Expected Output

- `Proposal Review Coach` หนึ่ง Agent
- Executive Decision Brief ภาษาไทยที่ตรวจสอบกับ source แล้ว

## Optional Extension

ลองเปลี่ยนผู้ฟังจาก Executive Steering Committee เป็น project team แล้วสังเกตว่ารายละเอียดและภาษาควรเปลี่ยนอย่างไร

[← กลับหน้าหลัก Agent Builder](README.md) | [ไป Exercise 2: Vendor Comparison Advisor →](02-vendor-comparison-advisor.md)
