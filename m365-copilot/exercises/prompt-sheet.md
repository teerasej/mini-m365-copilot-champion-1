# Exercise

## Section 1: Copilot Chat

ใช้ Section นี้เพื่อฝึก prompt engineering พื้นฐาน และลองใช้ Copilot Chat ในรูปแบบการสั่งงานที่ต่างกัน

### Scenario 1: Zero-Shot Prompt (Default)

ใช้ prompt นี้เมื่ออยากให้ Copilot ตอบทันทีโดยไม่ใส่ตัวอย่างเพิ่ม

#### Translation (Business Context – Life Insurance)


```text
Translate the following customer greeting into French for international clients:‘Welcome to our life insurance company in Thailand. How may we assist you with your life insurance, protection, or savings needs today?’
```
#### Summarization (Life Insurance Document)
```text
Summarize the main points of the following life insurance policy document, highlighting key coverage, benefits, exclusions, and value for policyholders:[Paste policy text here]
```
#### Informational (Customer Education – Life Insurance)
```text
What are the key benefits of having life insurance coverage for individuals and families in Thailand, including protection, savings, retirement planning, and long-term financial security?
```

#### Explanation (Industry Concept – Life Insurance & Risk Management)

```text
Explain the concept of risk management in the life insurance industry, and how a life insurance company helps individuals and families manage life, health, and financial risks through protection and long-term planning solutions.
```

### Scenario 2: Few-Shot Prompt

ใช้ prompt นี้เมื่ออยากให้ Copilot เรียนรู้รูปแบบจากตัวอย่างก่อนตอบ

#### Prompt

```text
Here are two email subject lines for internal meetings at our life insurance company:
• ‘Reminder: Policy Administration Review Meeting at 3 PM Today’
• ‘Don’t Forget: New Life Insurance Product Kickoff Tomorrow at 10 AM’

Now, write a professional subject line for a budget review meeting scheduled for next Wednesday at 2 PM, ensuring it reflects a corporate life insurance context.”

```

### Scenario 3: Chain-of-Thought (CoT) Prompt

ใช้ prompt นี้เมื่อโจทย์มีหลายขั้นและต้องการให้ Copilot อธิบายเหตุผลแบบเป็นขั้นตอน

#### Prompt

```text
A company processes customer orders manually. Each order takes 15 minutes to verify, and an employee can process 30 orders per day. If automation reduces verification time by 50%, how many additional orders can an employee process daily? Explain your reasoning step by step.
```

### Scenario 4: Self-Refine Prompt

ใช้ prompt นี้เมื่ออยากให้ Copilot ตรวจงานตัวเองแล้วปรับคำตอบให้ดีขึ้น

#### Marketing + Critique (Life Insurance Product)


```text
Generate a marketing slogan for a new life insurance product offered by our life insurance company.Now, critique your slogan and propose three alternative slogans that are more impactful and better aligned with trust, protection, long-term security, and care for families
```

#### Client Communication + Professional Rewrite (Life Insurance Customer)

```text
Compose an email to a client explaining an update to their life insurance policy, coverage, or claim status at our life insurance company.Review your email for tone, clarity, and empathy, and rewrite it to be more professional, reassuring, and customer-friendly
```
