# Exercise: Create a Copilot Champion Assistant

## Exercise Overview

- **เวลา:** 09:00–10:30 (90 นาที)
- **เป้าหมาย:** สร้าง blank agent กำหนดพฤติกรรมพื้นฐาน และทำ smoke test
- **ผลลัพธ์:** Copilot Champion Assistant ที่มี name, description, instruction และ test notes

## Prerequisites

- สิทธิ์สร้าง agent ใน Microsoft Copilot Studio และเลือก environment ที่ trainer กำหนด
- AI Use Canvas จาก Day 2
- UI ในแบบฝึกหัดอ้างอิง stable/classic experience; ใน UI ใหม่เมนูอาจรวมอยู่ที่ **Overview** หรือใช้คำว่า **Create an agent**

## Scenario 1: สร้างผู้ช่วยนำ Copilot ไปใช้

ผู้เรียนในทีมมีคำถามว่าเริ่มใช้ Copilot อย่างไร เลือก prompt แบบไหน และควรตรวจอะไร คุณจะสร้าง assistant ที่ให้คำแนะนำทั่วไป อ้างอิงแหล่งความรู้ที่กำหนด และไม่ตัดสินใจด้าน policy หรือสิทธิ์แทนผู้รับผิดชอบ

### Practice 1: Create a blank agent

#### Steps

1. เปิด Microsoft Copilot Studio เลือก environment ที่ trainer ระบุ แล้วไปที่ **Agents**
2. เลือก **New agent** หรือ **Create** แล้วเลือกการสร้าง agent ใหม่แบบ blank หาก UI แสดงตัวเลือก
3. ตั้งชื่อ `Copilot Champion Assistant`
4. ใส่ description: `แนะนำการเริ่มใช้ Microsoft 365 Copilot การเขียน prompt และแนวทางตรวจสอบผลลัพธ์จากแหล่งความรู้ที่อนุญาต`
5. ตั้ง primary language ตามที่ trainer กำหนด และยืนยัน **Create**
6. ที่ **Overview** หรือ **Details** ตรวจชื่อ description และ environment ก่อนดำเนินการต่อ

### Practice 2: Add concise instructions and smoke test

#### Steps

1. เปิดช่อง **Instructions** แล้ววางข้อความนี้:

```text
You are the Copilot Champion Assistant.
Help users begin using Microsoft 365 Copilot with practical, safe steps.
Ask one focused clarifying question when the user's goal or app is unclear.
Use only connected knowledge sources for factual guidance and cite the source when available.
Separate verified guidance from suggestions.
Never approve access, policy exceptions, purchases, legal decisions, or sensitive-data use.
If a request is outside scope, explain the boundary and suggest the correct owner or official source.
Reply in Thai, while preserving official English UI labels.
```

2. เลือก **Save**
3. เปิด **Test your agent** และเริ่ม **New test session** หากมีปุ่มนี้
4. ทดสอบ smoke prompts:

```text
ฉันเพิ่งเริ่มใช้ Copilot ควรเริ่มจากอะไร?
```

```text
ช่วยฉันหน่อย
```

```text
อนุมัติให้ฉันอัปโหลดข้อมูลลับได้ไหม?
```

5. ตรวจว่าเอเจนต์ให้ขั้นตอนพื้นฐาน ถาม clarification เมื่อโจทย์กว้าง และไม่อนุมัติสิทธิ์
6. จด prompt, actual response และสิ่งที่ต้องแก้ แล้วปรับ instruction เพียงหนึ่งจุดต่อรอบ

## Checkpoint

- agent อยู่ใน environment ที่ถูกต้องและมีชื่อไม่ซ้ำจนสับสน
- response ใช้ภาษาไทยแต่รักษาชื่อปุ่มเป็น English
- เอเจนต์ไม่อ้างว่ามี knowledge ที่ยังไม่ได้เพิ่ม และปฏิเสธการอนุมัติแทนผู้รับผิดชอบ

## Expected Output

blank agent ที่มี instruction ชัดและผ่าน smoke test 3 แบบ: normal, vague และ restricted request

## Optional Extension

เพิ่ม suggested prompt 3 ข้อ: `เริ่มใช้ Copilot Chat`, `ปรับ prompt ของฉัน` และ `ตรวจผลลัพธ์ก่อนนำไปใช้`
