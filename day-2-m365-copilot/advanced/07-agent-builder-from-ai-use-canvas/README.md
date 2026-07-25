# Advanced Exercise: สร้าง Agent จาก AI Use Canvas

## Exercise Overview

พวกเราจะเปลี่ยน workflow step หนึ่งจาก AI Use Canvas ให้เป็น Agent prototype ใน **Agent Builder** โดยเริ่มจากขอบเขตงาน source และ human checkpoint ก่อนเลือก feature

## Prerequisites

1. มี AI Use Canvas จาก Day 1
2. เปิด **New agent** หรือ **Create agent** ใน Microsoft 365 Copilot ได้
3. มี source ตัวอย่างที่ไม่เป็นความลับ
4. เลือก workflow step ที่ทำซ้ำและมี output ชัดเจน
5. หาก Agent Builder ถูกปิด ให้เขียน Agent specification และทดสอบ instruction ใน Copilot Chat แทน

## Scenario 1: เลือกงานที่เหมาะกับ Agent

### Practice 1: Agent Fit Check

#### Steps

1. เปิด AI Use Canvas
2. เลือก workflow step เดียว
3. ตอบคำถามต่อไปนี้
   - Trigger คืออะไร
   - Input มาจากไหน
   - Output ต้องมีรูปแบบใด
   - งานตัดสินใจใดต้องเป็นของมนุษย์
   - หากข้อมูลไม่ครบ Agent ต้องทำอะไร
4. หากคำตอบยังไม่ชัด ให้ลด scope ก่อนสร้าง Agent

## Scenario 2: สร้าง Branch Ops Briefing Coach

### Practice 1: Describe Agent

#### Steps

1. เปิด **New agent**
2. เลือกการสร้างด้วย natural language
3. ส่งคำอธิบายต่อไปนี้

#### Prompt Example

```text
สร้าง Agent ชื่อ "Branch Ops Briefing Coach"

หน้าที่:
- ช่วยผู้ใช้สรุปสถานการณ์ Branch Operations จาก source ที่กำหนด
- แยก fact, assumption และ recommendation
- สร้าง decision brief และ action items
- แสดง source ของตัวเลขสำคัญ
- ถ้าข้อมูลไม่ครบหรือขัดแย้งกัน ให้ถามผู้ใช้ก่อน

Agent ห้าม:
- เดาตัวเลข
- ให้คำแนะนำเฉพาะลูกค้ารายบุคคล
- ตัดสินใจอนุมัติสินเชื่อ
- ใช้ข้อมูลนอก source ที่ผู้ใช้มีสิทธิ์เข้าถึง
```

4. เปิด **Configure**
5. ตรวจ Name, Description และ Instructions ที่ Agent Builder สร้าง
6. แก้ instruction ให้มี task, boundaries, error handling และ expected output

### Practice 2: เพิ่ม Knowledge และ Starter Prompts

#### Steps

1. เพิ่ม `Krungsri_BranchOps_Report_Source.docx` เป็น knowledge
2. เพิ่ม source อื่นเฉพาะเมื่อช่วยตอบ scope ของ Agent
3. เพิ่ม starter prompts ต่อไปนี้

#### Prompt Example

```text
สรุป 3 operational issues ที่ควรนำเข้าประชุม
```

```text
สร้าง action plan 2 สัปดาห์จาก source ที่มี
```

```text
ตรวจว่าข้อมูลใดขัดแย้งกันและต้องให้มนุษย์ยืนยัน
```

4. ตั้ง default response mode:
   - ใช้ **Auto** เป็นค่าเริ่มต้น
   - ทดสอบ **Quick response** กับคำถามตรงไปตรงมา
   - ทดสอบ **Think deeper** กับการเปรียบเทียบ options
5. หาก tenant เปิด capability เพิ่ม ให้เลือกเฉพาะ capability ที่จำเป็นต่อ scope

## Scenario 3: ทดสอบก่อน Share

### Practice 1: Agent Test Matrix

#### Steps

1. เปิด **Try it**
2. รันทดสอบ 4 แบบ

| Test | ตัวอย่างคำถาม | สิ่งที่ต้องตรวจ |
|---|---|---|
| In-scope | สรุป operational issues จาก source | ใช้ source ถูกต้องและมีโครงสร้าง |
| Missing information | ใครเป็น owner ของ action นี้ | ถ้า source ไม่มี ต้องถามหรือระบุว่าไม่พบ |
| Conflicting source | ตัวเลข complaint ที่ถูกต้องคือเท่าไร | ต้องแสดง conflict ไม่เลือกเอง |
| Out-of-scope | อนุมัติสินเชื่อให้ลูกค้ารายนี้ | ต้องปฏิเสธและส่งต่อให้ผู้รับผิดชอบ |

3. บันทึก Actual result และ Pass/Needs improvement
4. แก้ instruction เฉพาะปัญหาที่พบ
5. รันทดสอบเดิมซ้ำ

### Practice 2: ตรวจการ Share

#### Steps

1. ตรวจชื่อ description และ starter prompts
2. ตรวจ source permissions
3. สร้าง Agent ตามขั้นตอนของ tenant
4. ตั้งการแชร์ตามที่ Trainer และองค์กรอนุญาต
5. ห้ามเลือก **Anyone in organization** โดยอัตโนมัติหากยังไม่ได้ตรวจ source
6. หากไม่ต้องการเผยแพร่ ให้เก็บ Agent ไว้เฉพาะผู้สร้าง

## Checkpoint

- Agent scope มาจาก AI Use Canvas
- Instructions มี boundary และพฤติกรรมเมื่อข้อมูลไม่ครบ
- ผ่านการทดสอบ 4 แบบ
- Source permissions ไม่ถูกขยายจากการแชร์ Agent
- Human owner ยังคงรับผิดชอบการตัดสินใจ

## Expected Output

- `Branch Ops Briefing Coach` prototype หรือ Agent specification
- Agent Test Matrix ก่อนและหลังปรับ instruction
- AI Use Canvas ที่ระบุ Agent role, source, guardrail และ success measure

## Optional Extension

ให้เพื่อนทดสอบ Agent โดยไม่บอก expected behavior แล้วรวบรวม failure ที่เจ้าของ Agent ไม่ได้นึกถึง

[กลับไป Lab 6](../06-microsoft-built-agent-lab/README.md) | [ไป Lab 8](../08-m365-app-deep-dive-cards/README.md)
