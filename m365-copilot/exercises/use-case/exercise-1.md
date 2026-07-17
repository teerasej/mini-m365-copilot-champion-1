# Copilot Chat

## Scenario

แบบฝึกหัดนี้ให้ผู้เรียนฝึกใช้ Copilot Chat เพื่อสรุปสถานการณ์เชิงธุรกิจจากข้อมูลหน้างาน
โดยเป้าหมายคือได้สรุปที่พร้อมใช้ตัดสินใจ และต่อยอดเป็นภาพสื่อสารได้ทันที

## Prerequisites

1. เปิดใช้งานบัญชี Microsoft 365 ที่เข้าถึง Copilot ได้
2. เตรียมข้อมูลตัวอย่างในโจทย์ให้พร้อม copy/paste
3. เลือกโหมดให้ถูกต้องก่อนเริ่มแต่ละ Scenario

## Steps

## Scenario 1: สรุปสถานการณ์งานบริการลูกค้าและงานขาย ของธนาคารกรุงศรี ด้วย Copilot Chat

### Practice 1: เปิด Copilot Chat

1. เปิด [Copilot Chat](https://m365.cloud.microsoft/chat) หรือ[ที่นี่](https://office.com)
2. ด้านบนของหน้าจอ chat ให้กดเลือกโหมด **Work IQ** 

### Practice 2: ทดลองใช้ Prompt Engineering ด้วย prompt ต้นฉบับจากสไลด์อ้างอิง

เป้าหมายของ Practice นี้คือฝึกเทคนิคจากสไลด์ 19-22 แบบต่อเนื่อง โดยใช้ prompt แบบ exact text ตามต้นฉบับทุกบรรทัด

### Practice 2a: Zero-Shot Prompt (Default)

1. ก๊อปปี้ prompt ด้านล่างทีละ use case ไปวางในช่องแชท และกดส่ง
2. สังเกตรูปแบบคำตอบที่ได้จากแต่ละ use case
3. จดข้อสังเกตสั้นๆ ว่าโทนและผลลัพธ์ต่างกันอย่างไร

#### Translation (Business Context - Banking)

```text
Translate the following customer greeting into French for international clients:'Welcome to Krungsri Bank in Thailand. How may we assist you with your banking, loan, or savings needs today?'
```

#### Creative Writing (Brand Tone - Banking Values)

```text
Write a short, professional poem about trust, security, and lifelong partnership, reflecting the values of Krungsri Bank and its long-term commitment to supporting customers and their families.
```

#### Summarization (Banking Product Document)

```text
Summarize the main points of the following banking product document, highlighting key features, benefits, conditions, and value for customers:[Paste product document text here]
```

#### Informational (Customer Education - Banking)

```text
What are the key benefits of using savings accounts and personal loan services for individuals and families in Thailand, including protection, savings, retirement planning, and long-term financial security?
```

#### Explanation (Industry Concept - Banking & Risk Management)

```text
Explain the concept of risk management in the banking industry, and how Krungsri Bank helps individuals and families manage credit, savings, and financial risks through responsible lending and long-term planning solutions.
```

### Practice 2b: Few-Shot Prompt

1. ก๊อปปี้ prompt ด้านล่างไปวางในช่องแชท และกดส่ง
2. สังเกตว่าตัวอย่างที่ให้ไว้ใน prompt มีผลต่อรูปแบบคำตอบอย่างไร

```text
Here are two email subject lines for internal meetings at Krungsri Bank:
- 'Reminder: Loan Portfolio Review Meeting at 3 PM Today'
- 'Don't Forget: New Digital Banking Product Kickoff Tomorrow at 10 AM'

Now, write a professional subject line for a budget review meeting scheduled for next Wednesday at 2 PM, ensuring it reflects a corporate banking context.
```

### Practice 2c: Chain-of-Thought (CoT) Prompt

1. ก๊อปปี้ prompt ด้านล่างไปวางในช่องแชท และกดส่ง
2. สังเกตการอธิบายแบบเป็นลำดับเหตุผลก่อนสรุปคำตอบ

```text
A company processes customer orders manually. Each order takes 15 minutes to verify, and an employee can process 30 orders per day. If automation reduces verification time by 50%, how many additional orders can an employee process daily? Explain your reasoning step by step.
```

### Practice 2d: Self-Refine Prompt

1. ก๊อปปี้ prompt ด้านล่างทีละ use case ไปวางในช่องแชท และกดส่ง
2. สังเกตความต่างระหว่างคำตอบรอบแรกกับคำตอบที่ถูกปรับปรุงโดยโมเดล
3. จดข้อสังเกตว่าการสั่งให้วิจารณ์และปรับคำตอบช่วยเพิ่มพวกเราภาพอย่างไร

#### Customer Education Content + Refinement (Banking Context)

```text
Write a short paragraph about the benefits of using savings accounts and personal loan services for individuals and families, including financial protection, savings, and long-term security. Then, review your paragraph and suggest ways to improve its clarity and conciseness for banking customers.
```

#### Marketing + Critique (Banking Product)

```text
Generate a marketing slogan for a new savings account product offered by Krungsri Bank. Now, critique your slogan and propose three alternative slogans that are more impactful and better aligned with trust, protection, long-term security, and care for families.
```

#### Product Terms Summary + Improvement (Banking Product Terms)

```text
Write a summary of the following banking product terms document: [paste product terms]. Then, identify any areas where your summary could be more accurate, clearer, or more comprehensive, and revise it accordingly for company stakeholders and customers.
```

#### Client Communication + Professional Rewrite (Banking Customer)

```text
Compose an email to a client explaining an update to their loan application, account status, or service request at Krungsri Bank. Review your email for tone, clarity, and empathy, and rewrite it to be more professional, reassuring, and customer-friendly.
```


## Checkpoint

- รัน prompt ครบตามเทคนิค Zero-Shot, Few-Shot, Chain-of-Thought, และ Self-Refine
- ใช้ prompt ต้นฉบับจากสไลด์อ้างอิงแบบ exact text โดยไม่แก้ข้อความ
- มีบันทึกข้อสังเกตความแตกต่างของคำตอบจากแต่ละเทคนิคอย่างน้อย 1 จุดต่อเทคนิค

## Expected Output

- ผลลัพธ์จากการทดลอง prompt อย่างน้อย 1 คำตอบต่อเทคนิค
- บันทึกเปรียบเทียบพวกเราภาพคำตอบระหว่างเทคนิคทั้ง 4 แบบ
- ตัวอย่างคำตอบที่ผ่านการปรับปรุงจาก Self-Refine อย่างน้อย 1 ชิ้น
