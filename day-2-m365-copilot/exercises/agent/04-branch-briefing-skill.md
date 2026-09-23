# Optional Exercise 4: สร้างและทดสอบ Skill ใน Agent Builder

## Exercise Overview

เราจะสร้าง `Branch Briefing Coach` ตัวใหม่ แล้วให้ Agent Builder สร้าง Skill ชื่อ `branch-decision-brief` สำหรับเปลี่ยนบันทึกสถานการณ์สาขาเป็น Decision Brief ที่ใช้โครงสร้างเดิมได้ทุกครั้งครับ คิดว่า Instructions ของ Agent เป็นคำบอกหน้าที่ของผู้ช่วย ส่วน Skill เป็นสูตรทำงานเฉพาะเรื่องที่ผู้ช่วยหยิบมาใช้เมื่องานตรงกัน

แบบฝึกหัดนี้เป็น **ทางเลือกหลัง Exercise 1–3** และไม่ต้องใช้ไฟล์ Knowledge จากแบบฝึกหัดก่อนหน้า เราจะใช้ข้อมูลสาขาจำลองที่อยู่ในหน้านี้เท่านั้น

## Prerequisites

- ต้องมี Microsoft 365 Copilot license ที่เข้าเกณฑ์ หรือสิทธิ์ใช้งานแบบ pay-as-you-go และเข้าถึง Agent Builder ได้
- องค์กรต้องอยู่ใน Microsoft Frontier Preview และเปิดความสามารถ Custom skills สำหรับบัญชีที่ใช้ หากองค์กรใช้ Microsoft Purview Information Barriers จะใช้ Custom skills ไม่ได้
- หากไม่เห็น `Skills` หรือสร้าง Skill ไม่สำเร็จ ให้ทำ **เส้นทางจำลองเมื่อไม่มี Frontier Preview** ด้านล่าง
- สร้าง Agent **ตัวใหม่** สำหรับกิจกรรมนี้ อย่าเพิ่ม Skill ลงใน Agent จาก Exercise 1–3 ที่ใช้ไฟล์ Knowledge: ในช่วง Preview ยังไม่รองรับ Agent ที่มีทั้ง Skills และ embedded files

## Scenario 1: ทำบันทึกสาขาให้เป็น Decision Brief แบบสม่ำเสมอ

### Practice 1: กำหนด Agent และ Skill แยกหน้าที่กัน

**Primary target:** สร้าง Agent ที่มีหน้าที่ทั่วไปสั้น ๆ และ Skill ที่เก็บขั้นตอนทำ Decision Brief โดยเฉพาะ

#### Steps

1. เปิด [Microsoft 365 Copilot Chat](https://m365.cloud.microsoft) ด้วยบัญชีองค์กร เลือก **Agents & Skills** แล้วเลือก **New agent**
2. ในช่อง **Message Agent Builder** วางคำอธิบายนี้ แล้วส่ง

   ```text
   สร้าง Agent ใหม่ชื่อ Branch Briefing Coach สำหรับช่วยทีมสาขาจัดข้อมูลการปฏิบัติงานให้พร้อมคุยกับผู้จัดการ

   ให้ Instructions หลักของ Agent สั้น ๆ: ตอบภาษาไทย ใช้เฉพาะข้อมูลจำลองที่ผู้ใช้ให้ในบทสนทนา ไม่เดาข้อเท็จจริง และให้มนุษย์เป็นผู้ตัดสินใจ

   เพิ่ม Skill ชื่อ branch-decision-brief สำหรับใช้เมื่อผู้ใช้ขอเปลี่ยนบันทึกสถานการณ์สาขาเป็น Decision Brief เท่านั้น ช่วยกำหนด Description ให้บอกชัดว่า Skill นี้ใช้เมื่อใด

   ให้ Skill ทำตามขั้นตอนนี้:
   1. อ่านข้อมูลที่ผู้ใช้ให้ และแยก Fact, Assumption และข้อมูลที่ยังไม่ทราบ
   2. สร้าง Decision Brief ภาษาไทยตามหัวข้อ Decision needed, Evidence, Risks and assumptions, Missing information, Questions and next action
   3. ระบุตัวเลขพร้อมบริบทของตัวเลข ห้ามแต่ง Owner, วัน rollout หรือผลการตัดสินใจ
   4. ปิดท้ายด้วยจุดให้ผู้จัดการตรวจและตัดสินใจเอง

   หากคำขอไม่ใช่การทำ Decision Brief จากสถานการณ์สาขา อย่าใช้ Skill นี้เพื่อบังคับคำตอบให้เป็น Decision Brief
   ```

3. เปิด **Configure** แล้วตรวจว่า `Name` เป็น `Branch Briefing Coach` และ `Instructions` หลักบอกหน้าที่กว้าง ๆ โดยไม่ได้คัดลอกขั้นตอนทำ Brief ทั้งหมดมาใส่ซ้ำ
4. ใน **Configure** ขยาย **Skills** แล้วเลือก `branch-decision-brief` เพื่อตรวจ `Description` และรายละเอียด Skill ให้มีทั้งเงื่อนไขการใช้ ขั้นตอน หัวข้อผลลัพธ์ และข้อห้ามเดาข้อมูล หาก Skill ไม่ปรากฏ ให้ขอ Agent Builder เพิ่ม Skill จากคำอธิบายเดิมอีกครั้ง; ถ้ายังไม่สำเร็จให้ใช้เส้นทางจำลองด้านล่าง

#### Checkpoint

- เห็น `branch-decision-brief` ในส่วน `Skills` ของ Agent ตัวใหม่
- Instructions หลักกับ Skill แยกหน้าที่กัน และ Skill ระบุว่าจะใช้กับคำขอ Decision Brief จากสถานการณ์สาขา

### Practice 2: ทดสอบการใช้ Skill กับงานที่ตรงและไม่ตรง

**Primary target:** ทดสอบว่า Agent สร้าง Brief จากข้อมูลที่ให้ได้สม่ำเสมอ โดยไม่เดาข้อมูลที่ขาด และไม่ใช้รูปแบบ Brief กับคำถามคนละเรื่อง

#### Steps

1. เปิด **Preview** แล้วส่งข้อมูลจำลองและคำขอนี้ในข้อความเดียวกัน

   ```text
   ช่วยทำ Decision Brief สำหรับผู้จัดการที่ต้องพิจารณาว่าจะขยายการใช้ kiosk จากบันทึกสถานการณ์สาขาจำลองนี้

   - เวลารอคิวเฉลี่ยปัจจุบัน: 18 นาที
   - วันนี้พนักงานเคาน์เตอร์ขาด 2 คน
   - การทดลองใช้ kiosk ในช่วงนำร่องพบเวลารอคิวเฉลี่ย 11 นาที
   - ยังไม่มีข้อมูลว่าใครเป็น Owner ของการขยายผล และยังไม่ได้กำหนดวัน rollout

   ขอให้แยกสิ่งที่ทราบจริง สิ่งที่ยังไม่ทราบ และคำถามที่ผู้จัดการควรตอบก่อนตัดสินใจ
   ```

2. ตรวจว่าคำตอบมีทั้ง 5 หัวข้อที่กำหนดใน Skill ระบุตัวเลข 18 นาที, 11 นาที และพนักงานขาด 2 คนตามบริบท และบอกชัดว่า Owner กับวัน rollout ยังไม่ทราบ ไม่สรุปว่าต้องขยาย kiosk ทันที
3. เริ่มบทสนทนาทดสอบใหม่ใน **Preview** แล้วส่งข้อความเดียวกับข้อ 1 อีกครั้ง เปรียบเทียบว่าหัวข้อและกติกาเรื่องข้อมูลที่ขาดยังคงเดิม แม้ถ้อยคำของคำตอบต่างกันได้
4. เริ่มบทสนทนาทดสอบใหม่ แล้วส่งคำถามนอกขอบเขตนี้

   ```text
   บัญชีออมทรัพย์กับบัญชีฝากประจำต่างกันอย่างไร
   ```

5. ตรวจว่าคำตอบของข้อ 4 ไม่ถูกฝืนให้เป็น Decision Brief ของสาขา Agent อาจบอกว่าไม่มีข้อมูลผลิตภัณฑ์เพียงพอ เพราะเรายังไม่ได้ให้ source เรื่องนี้ การเห็นโครงสร้างคำตอบที่เหมาะสมเป็นหลักฐานด้านพฤติกรรม แต่ไม่ได้ยืนยันจากระบบว่า Skill ถูกเรียกในทุกครั้ง
6. จดผลทั้ง 3 ครั้งว่า `Pass` หรือ `Needs improvement` พร้อมข้อสังเกตสั้น ๆ ถ้ายังเดาข้อมูลหรือใช้รูปแบบผิด ให้ปรับ Skill แล้วลองใหม่

#### Checkpoint

- การทดสอบสองครั้งที่ตรงขอบเขตให้โครงสร้างและข้อจำกัดเรื่องข้อมูลที่ขาดสอดคล้องกัน
- คำถามนอกขอบเขตไม่กลายเป็น Decision Brief และไม่มีการแต่ง Owner, วัน rollout หรือคำตัดสินของผู้จัดการ

## เส้นทางจำลองเมื่อไม่มี Frontier Preview

หากบัญชีไม่เห็น `Skills` หรือสร้าง Skill ไม่สำเร็จ ให้บันทึกชื่อ `branch-decision-brief`, เงื่อนไขการใช้, ขั้นตอนทั้ง 4 ข้อ และหัวข้อผลลัพธ์ทั้ง 5 ข้อจาก Practice 1 เป็น **Skill specification** จากนั้นวางข้อมูลจำลองใน Practice 2 พร้อมคำสั่งให้ Copilot Chat ทำตาม specification นั้น และตรวจผลด้วย Checkpoint เดียวกัน

> **⚠️ Note:** ผลจาก Copilot Chat ในเส้นทางนี้เป็น **การจำลองพฤติกรรม Skill** เท่านั้น ไม่ใช่หลักฐานว่า Agent Builder สร้างหรือเรียกใช้ Skill จริง

## Checkpoint

- แยกหลักฐานให้ชัดว่าได้เห็น Skill ใน Agent Builder หรือทำเพียงการจำลอง
- Decision Brief มีหัวข้อครบ ใช้ตัวเลขตามข้อมูลจำลอง และส่งเรื่อง Owner, วัน rollout และการตัดสินใจให้มนุษย์ตรวจ

## Expected Output

- เมื่อใช้ Frontier Preview ได้: `Branch Briefing Coach` ที่มี `branch-decision-brief` และผลทดสอบ 3 แบบ พร้อมบันทึก Pass/Needs improvement
- เมื่อใช้ Frontier Preview ไม่ได้: Skill specification และผลทดสอบจำลองที่ระบุชัดว่าไม่ได้ทดสอบการเรียกใช้ Skill จริง

## Optional Extension

ลองขอให้ Agent Builder ปรับ `Description` ของ Skill ให้แคบหรือชัดขึ้น แล้วทดสอบคำขอที่ใกล้เคียงกันอีกครั้ง โดยตรวจว่าคำตอบยังไม่เดาข้อมูล

## Official Microsoft References

- [Add custom skills to your declarative agent in Agent Builder (preview)](https://learn.microsoft.com/microsoft-365/copilot/extensibility/agent-builder-add-skills)
- [Custom skills in declarative agents (preview)](https://learn.microsoft.com/microsoft-365/copilot/extensibility/declarative-agent-skills)

[← กลับหน้าหลัก Agent Builder](README.md) | [จบชุด Agent Builder และกลับไป Day 2 →](../../README.md)
