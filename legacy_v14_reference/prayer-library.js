"use strict";
const PRAYER_LIBRARY=[
  {
    "id": "word-1",
    "category": "Gratitude",
    "title": "Every Good Gift",
    "scripture": "James 1:17",
    "prayer": "Father, I give thanks for what I have received without earning and for mercies I have failed to notice. Teach me to recognize Your goodness without mistaking gifts for their Giver. Through Jesus Christ our Lord. Amen.",
    "question": "What do I receive daily without considering its source?",
    "context": "James 1:12–18",
    "related": "Psalm 103; 1 Chronicles 29:10–14"
  },
  {
    "id": "word-2",
    "category": "Gratitude",
    "title": "Remembering Mercy",
    "scripture": "Psalm 103:1–5",
    "prayer": "Heavenly Father, keep me from forgetting Your mercy. Let thanksgiving arise not only from comfort, but from the remembrance of Your patience with me. Through Jesus Christ our Lord. Amen.",
    "question": "What does the psalmist tell his soul not to forget?",
    "context": "Psalm 103",
    "related": "Luke 17:11–19; Exodus 34:6–7"
  },
  {
    "id": "word-3",
    "category": "Gratitude",
    "title": "Enough for Today",
    "scripture": "Matthew 6:25–34",
    "prayer": "Father, You know what I need before I ask. Free me from the fear that turns tomorrow into a burden today. Teach me to seek first Your kingdom. In Jesus’ name. Amen.",
    "question": "What does Jesus distinguish between need and worry?",
    "context": "Matthew 6:19–34",
    "related": "Exodus 16; Philippians 4:10–13"
  },
  {
    "id": "word-4",
    "category": "Gratitude",
    "title": "The Work of Our Hands",
    "scripture": "Psalm 90:12–17",
    "prayer": "Lord, establish the work of our hands. Give us wisdom to number our days and humility to know that our labor is brief before You. Amen.",
    "question": "How does the brevity of life change the meaning of work?",
    "context": "Psalm 90",
    "related": "Colossians 3:22–24; Ecclesiastes 3:9–15"
  },
  {
    "id": "word-5",
    "category": "Love",
    "title": "Love as Commandment",
    "scripture": "John 13:34–35",
    "prayer": "Lord Jesus Christ, You loved Your own to the end. Teach me to love in deeds rather than words alone, without seeking recognition or reward. Amen.",
    "question": "What makes the commandment Jesus gives here new?",
    "context": "John 13:1–35",
    "related": "1 John 3:16–18; Leviticus 19:17–18"
  },
  {
    "id": "word-6",
    "category": "Love",
    "title": "The Neighbor",
    "scripture": "Luke 10:25–37",
    "prayer": "Merciful Lord, forgive the ways I make compassion conditional. Give me eyes to see the person before me and the courage to act with mercy. Amen.",
    "question": "Which question does Jesus answer—and which does He change?",
    "context": "Luke 10:25–37",
    "related": "Micah 6:6–8; James 2:14–17"
  },
  {
    "id": "word-7",
    "category": "Love",
    "title": "Love Without Display",
    "scripture": "1 Corinthians 13:1–13",
    "prayer": "Lord Jesus, purify the motives of my heart. May even my strongest convictions and greatest efforts be governed by love. Amen.",
    "question": "Why does Paul describe great gifts as nothing without love?",
    "context": "1 Corinthians 12:27–13:13",
    "related": "John 15:9–17; 1 John 4:7–21"
  },
  {
    "id": "word-8",
    "category": "Love",
    "title": "Forgiving a Debt",
    "scripture": "Matthew 18:21–35",
    "prayer": "Father, You have shown mercy beyond my measure. Do not let me hold others to a standard of forgiveness I refuse to apply to myself. Through Christ our Lord. Amen.",
    "question": "What does the servant understand about his own debt?",
    "context": "Matthew 18:21–35",
    "related": "Matthew 6:9–15; Ephesians 4:25–32"
  },
  {
    "id": "word-9",
    "category": "Humility",
    "title": "The Mind of Christ",
    "scripture": "Philippians 2:1–11",
    "prayer": "Lord Jesus Christ, You humbled Yourself and took the form of a servant. Deliver me from the need to be first. Teach me the obedience of love. Amen.",
    "question": "What does Paul mean by having the mind of Christ?",
    "context": "Philippians 2:1–18",
    "related": "Mark 10:35–45; Isaiah 53"
  },
  {
    "id": "word-10",
    "category": "Humility",
    "title": "The Pharisee and the Tax Collector",
    "scripture": "Luke 18:9–14",
    "prayer": "Lord Jesus Christ, Son of God, have mercy on me, a sinner. Save me from measuring my righteousness against another person. Amen.",
    "question": "What does each man bring before God in his prayer?",
    "context": "Luke 18:9–14",
    "related": "Psalm 51; James 4:6–10"
  },
  {
    "id": "word-11",
    "category": "Humility",
    "title": "Learning to Listen",
    "scripture": "James 1:19–27",
    "prayer": "Holy Spirit, restrain my haste to speak and my eagerness to defend myself. Grant me the humility to hear the Word and to do what it commands. Amen.",
    "question": "What is the difference between hearing the Word and doing it?",
    "context": "James 1:19–27",
    "related": "Proverbs 18:13; Luke 6:46–49"
  },
  {
    "id": "word-12",
    "category": "Humility",
    "title": "Strength in Weakness",
    "scripture": "2 Corinthians 12:7–10",
    "prayer": "Lord, I confess my desire to appear sufficient in myself. Teach me to depend on Your grace without despising my limitations. Amen.",
    "question": "Why does Paul say he can boast in weakness?",
    "context": "2 Corinthians 12:1–10",
    "related": "1 Corinthians 1:18–31; Isaiah 40:27–31"
  },
  {
    "id": "word-13",
    "category": "Thanksgiving",
    "title": "Praise Beyond Circumstance",
    "scripture": "Habakkuk 3:17–19",
    "prayer": "God of our salvation, when circumstances offer little comfort, teach me to remember who You are. Let my praise be truthful and steadfast. Amen.",
    "question": "What remains when the things named by Habakkuk are taken away?",
    "context": "Habakkuk 3",
    "related": "Psalm 13; Philippians 4:4–9"
  },
  {
    "id": "word-14",
    "category": "Thanksgiving",
    "title": "A Song in the Night",
    "scripture": "Acts 16:22–34",
    "prayer": "Father, keep my worship from depending on ease. In hardship, give me the grace to remain faithful and attentive to those around me. Through Jesus Christ. Amen.",
    "question": "What changes in this account before anyone is set free?",
    "context": "Acts 16:16–40",
    "related": "Psalm 42; 1 Peter 1:3–9"
  },
  {
    "id": "word-15",
    "category": "Thanksgiving",
    "title": "Creation Speaks",
    "scripture": "Psalm 19:1–14",
    "prayer": "Creator of heaven and earth, awaken my attention to the world You have made and to the Word You have spoken. Let both lead me to reverence. Amen.",
    "question": "How does this psalm move from creation to the law of the Lord?",
    "context": "Psalm 19",
    "related": "Romans 1:18–23; Genesis 1"
  },
  {
    "id": "word-16",
    "category": "Thanksgiving",
    "title": "The Bread of Life",
    "scripture": "John 6:25–40",
    "prayer": "Lord Jesus Christ, keep me from seeking only what satisfies for a moment. Draw me toward the life that comes from You. Amen.",
    "question": "What are the people seeking from Jesus, and what does He offer?",
    "context": "John 6:22–59",
    "related": "Deuteronomy 8:1–10; Exodus 16"
  },
  {
    "id": "word-17",
    "category": "Repentance",
    "title": "A Clean Heart",
    "scripture": "Psalm 51:1–17",
    "prayer": "Merciful Father, I have sinned in thought, word, and deed. Do not let me hide behind excuses. Create in me a clean heart and renew a right spirit within me. Amen.",
    "question": "What does David ask God to do that he cannot do for himself?",
    "context": "Psalm 51",
    "related": "2 Samuel 11–12; 1 John 1:5–10"
  },
  {
    "id": "word-18",
    "category": "Repentance",
    "title": "Return to Me",
    "scripture": "Joel 2:12–17",
    "prayer": "Lord, call me back from divided loyalties. Give me a repentance deeper than appearances and a heart willing to return to You. Amen.",
    "question": "Why does Joel contrast the heart with outward signs?",
    "context": "Joel 2:1–17",
    "related": "Isaiah 58:1–12; Luke 15:11–32"
  },
  {
    "id": "word-19",
    "category": "Repentance",
    "title": "The Narrow Gate",
    "scripture": "Matthew 7:13–27",
    "prayer": "Lord Jesus, save me from hearing Your words without obeying them. Give me the courage to examine the foundation on which I build my life. Amen.",
    "question": "What distinguishes the two builders in Jesus’ parable?",
    "context": "Matthew 7:13–29",
    "related": "James 1:22–25; Ezekiel 36:25–27"
  },
  {
    "id": "word-20",
    "category": "Repentance",
    "title": "The Weight of Words",
    "scripture": "James 3:1–12",
    "prayer": "Holy Spirit, guard my tongue. Expose the pride and anger beneath careless speech, and teach me to speak truth with restraint and love. Amen.",
    "question": "Why does James treat speech as a matter of such consequence?",
    "context": "James 3:1–18",
    "related": "Proverbs 12:18; Matthew 12:33–37"
  },
  {
    "id": "word-21",
    "category": "Intercession",
    "title": "Teach Us to Pray",
    "scripture": "Luke 11:1–13",
    "prayer": "Our Father in heaven, teach us to pray. Give us trust in Your goodness, perseverance in asking, and care for the needs of others. Through Jesus Christ. Amen.",
    "question": "What does Jesus reveal about the Father through His teaching on prayer?",
    "context": "Luke 11:1–13",
    "related": "Matthew 6:5–15; Romans 8:26–27"
  },
  {
    "id": "word-22",
    "category": "Intercession",
    "title": "For Those Who Suffer",
    "scripture": "Romans 12:9–21",
    "prayer": "Father of mercies, remember those who suffer in body, mind, or spirit. Give them comfort, and make me ready to share their burdens in practical love. Amen.",
    "question": "What does Paul mean by rejoicing and weeping with others?",
    "context": "Romans 12:9–21",
    "related": "2 Corinthians 1:3–7; Galatians 6:1–10"
  },
  {
    "id": "word-23",
    "category": "Intercession",
    "title": "For Our Children",
    "scripture": "Deuteronomy 6:4–9",
    "prayer": "Heavenly Father, entrust our children to Your care. Teach us to speak of Your Word honestly, to live what we teach, and to love them with patience. In Jesus’ name. Amen.",
    "question": "What does this passage require of parents before it speaks of teaching children?",
    "context": "Deuteronomy 6:1–25",
    "related": "Psalm 78:1–8; Ephesians 6:1–4"
  },
  {
    "id": "word-24",
    "category": "Intercession",
    "title": "For Those in Authority",
    "scripture": "1 Timothy 2:1–6",
    "prayer": "Lord, grant wisdom and justice to those entrusted with authority. Restrain evil, protect the vulnerable, and teach us to seek peace without surrendering truth. Amen.",
    "question": "Why does Paul connect prayer for rulers with the knowledge of truth?",
    "context": "1 Timothy 2:1–7",
    "related": "Jeremiah 29:4–7; Romans 13:1–7"
  },
  {
    "id": "word-25",
    "category": "Faith",
    "title": "Faith and What Is Unseen",
    "scripture": "Hebrews 11:1–16",
    "prayer": "Father, strengthen my faith when the way ahead is not plain. Help me walk in obedience to what You have revealed, without demanding certainty about all that follows. Amen.",
    "question": "How do the people in this passage act without seeing the outcome?",
    "context": "Hebrews 11:1–16",
    "related": "Genesis 12:1–9; 2 Corinthians 5:6–10"
  },
  {
    "id": "word-26",
    "category": "Faith",
    "title": "Lord, I Believe",
    "scripture": "Mark 9:14–29",
    "prayer": "Lord Jesus Christ, I bring You my faith and my doubt. Have mercy on me, and teach me to ask for help without pretending certainty I do not possess. Amen.",
    "question": "What is the father asking for when he says, “Help my unbelief”?",
    "context": "Mark 9:14–29",
    "related": "Psalm 73; John 20:24–29"
  },
  {
    "id": "word-27",
    "category": "Wisdom",
    "title": "The Beginning of Wisdom",
    "scripture": "Proverbs 9:1–12",
    "prayer": "Lord, grant me a teachable heart. Free me from the pride that resists correction and lead me toward the wisdom that begins in reverence for You. Amen.",
    "question": "Why does Proverbs connect wisdom with the fear of the Lord?",
    "context": "Proverbs 9",
    "related": "Job 28; James 3:13–18"
  },
  {
    "id": "word-28",
    "category": "Wisdom",
    "title": "Ask for Wisdom",
    "scripture": "James 1:2–8",
    "prayer": "Heavenly Father, when I lack wisdom, teach me to ask You rather than trust only my own judgment. Give me steadiness in trial and honesty in prayer. Amen.",
    "question": "Why does James introduce wisdom in the middle of a discussion of trials?",
    "context": "James 1:1–18",
    "related": "1 Kings 3:5–14; Proverbs 2"
  },
  {
    "id": "word-29",
    "category": "Peace",
    "title": "Peace and the Mind",
    "scripture": "Philippians 4:4–9",
    "prayer": "Lord Jesus, turn my anxious thoughts toward what is true. Teach me to bring my needs before the Father and to practice what Your Word commands. Amen.",
    "question": "How are prayer, thought, and practice connected in this passage?",
    "context": "Philippians 4:4–9",
    "related": "Matthew 6:25–34; Isaiah 26:1–4"
  },
  {
    "id": "word-30",
    "category": "Peace",
    "title": "Be Still",
    "scripture": "Psalm 46",
    "prayer": "God our refuge and strength, quiet the fears that govern my attention. Remind me that Your presence does not depend on the absence of trouble. Amen.",
    "question": "What does “be still” mean in the setting of this psalm?",
    "context": "Psalm 46",
    "related": "Mark 4:35–41; Exodus 14:10–14"
  },
  {
    "id": "word-31",
    "category": "Stewardship",
    "title": "Entrusted with Much",
    "scripture": "Matthew 25:14–30",
    "prayer": "Father, everything I hold is entrusted to me for a time. Give me faithfulness, courage, and wisdom in the use of what belongs to You. Through Christ our Lord. Amen.",
    "question": "What does this parable suggest about responsibility and fear?",
    "context": "Matthew 25:14–30",
    "related": "Luke 12:35–48; 1 Peter 4:7–11"
  },
  {
    "id": "word-32",
    "category": "Stewardship",
    "title": "Faithful in Little",
    "scripture": "Luke 16:1–13",
    "prayer": "Lord, teach me integrity in small matters and freedom from the mastery of possessions. Let my decisions reflect whom I truly serve. Amen.",
    "question": "Why does Jesus connect faithfulness in small things with greater trust?",
    "context": "Luke 16:1–13",
    "related": "Proverbs 11:1; Colossians 3:17–24"
  },
  {
    "id": "word-33",
    "category": "Perseverance",
    "title": "The Testing of Faith",
    "scripture": "James 1:2–18",
    "prayer": "Father, do not let suffering make me careless or bitter. Give me endurance, and help me discern what Your Word actually promises in trials. Amen.",
    "question": "What does James say trials produce, and what does he not say?",
    "context": "James 1:2–18",
    "related": "Romans 5:1–5; 1 Peter 1:3–9"
  },
  {
    "id": "word-34",
    "category": "Perseverance",
    "title": "Waiting",
    "scripture": "Psalm 37:1–11",
    "prayer": "Lord, teach me to wait without abandoning what is right. Guard me from envy, resentment, and the temptation to answer evil with evil. Amen.",
    "question": "How does this psalm distinguish waiting from doing nothing?",
    "context": "Psalm 37:1–11",
    "related": "James 5:7–11; Isaiah 40:27–31"
  },
  {
    "id": "word-35",
    "category": "Family",
    "title": "A House of Service",
    "scripture": "Joshua 24:14–24",
    "prayer": "Father, grant our household a sincere faith. May our words and ordinary choices show whom we serve, without pride or pretense. Amen.",
    "question": "What does Joshua ask the people to choose, and what does that choice require?",
    "context": "Joshua 24:14–24",
    "related": "Deuteronomy 6:4–9; Psalm 127"
  },
  {
    "id": "word-36",
    "category": "Family",
    "title": "Bearing with One Another",
    "scripture": "Colossians 3:12–17",
    "prayer": "Lord Jesus Christ, clothe us with compassion, patience, and forgiveness. Help us bear with one another without denying the truth. Amen.",
    "question": "What does it mean for the peace of Christ to rule in a household?",
    "context": "Colossians 3:12–21",
    "related": "Ephesians 4:25–32; Romans 12:9–18"
  },
  {
    "id": "word-37",
    "category": "Suffering",
    "title": "The Questions of Job",
    "scripture": "Job 38:1–18",
    "prayer": "Lord of all creation, I confess the limits of my understanding. Give me honesty in grief and reverence before mysteries I cannot resolve. Amen.",
    "question": "What does God’s answer to Job address, and what does it leave unanswered?",
    "context": "Job 38–42",
    "related": "Job 1–2; Psalm 88"
  },
  {
    "id": "word-38",
    "category": "Suffering",
    "title": "A Psalm of Lament",
    "scripture": "Psalm 13",
    "prayer": "Father, receive even the prayers I struggle to speak. Teach me to bring sorrow before You rather than hide it or pretend it is gone. Amen.",
    "question": "How does this psalm hold complaint and trust together?",
    "context": "Psalm 13",
    "related": "Psalm 22; Lamentations 3:19–33"
  },
  {
    "id": "word-39",
    "category": "Scripture",
    "title": "Open My Eyes",
    "scripture": "Psalm 119:17–24",
    "prayer": "Holy Spirit, open my understanding as I read. Correct my assumptions, strengthen my attention, and lead me into the truth of God’s Word. Amen.",
    "question": "What does the psalmist ask for before asking for understanding?",
    "context": "Psalm 119:17–40",
    "related": "Luke 24:13–35; 2 Timothy 3:14–17"
  },
  {
    "id": "word-40",
    "category": "Scripture",
    "title": "The Word Made Flesh",
    "scripture": "John 1:1–18",
    "prayer": "Lord Jesus Christ, eternal Word of the Father, draw me beyond familiarity with sacred words into a truer knowledge of You. Amen.",
    "question": "What does John claim about the Word before describing His coming into the world?",
    "context": "John 1:1–18",
    "related": "Genesis 1; Colossians 1:15–20"
  },
  {
    "id": "word-41",
    "category": "Prayer & Life in the Spirit",
    "title": "Ask for the Spirit",
    "scripture": "Luke 11:9–13",
    "prayer": "Father, You know how to give good gifts. Teach me to ask with trust, to seek with patience, and to receive the Holy Spirit with humility. Amen.",
    "question": "What does Jesus’ comparison between earthly parents and the Father reveal about prayer?",
    "context": "Luke 11:1–13",
    "related": "James 1:5–8; Acts 2:37–39"
  },
  {
    "id": "word-42",
    "category": "Prayer & Life in the Spirit",
    "title": "The Spirit Helps Us Pray",
    "scripture": "Romans 8:26–27",
    "prayer": "Holy Spirit, meet me in weakness, even when I cannot find words. Let my prayers be shaped by the will of God rather than my fear. Amen.",
    "question": "What does this passage say the Spirit does when our words fail?",
    "context": "Romans 8:18–30",
    "related": "Psalm 139:1–12; Hebrews 7:25"
  },
  {
    "id": "word-43",
    "category": "Prayer & Life in the Spirit",
    "title": "Teach Me Your Will",
    "scripture": "Psalm 143:10",
    "prayer": "Lord, teach me to do Your will. Let Your good Spirit lead me on level ground and correct me when I confuse my preference with Your way. Amen.",
    "question": "What is the relationship between asking to be taught and being willing to obey?",
    "context": "Psalm 143",
    "related": "John 14:26; Romans 12:1–2"
  },
  {
    "id": "word-44",
    "category": "Prayer & Life in the Spirit",
    "title": "Spirit of Wisdom",
    "scripture": "Ephesians 1:16–19",
    "prayer": "Father of glory, enlighten the eyes of my heart. Let me know You more truly and understand the hope to which You call Your people. Amen.",
    "question": "What does Paul pray believers will know beyond simply possessing information?",
    "context": "Ephesians 1:15–23",
    "related": "Colossians 1:9–14; Proverbs 2:1–11"
  },
  {
    "id": "word-45",
    "category": "Prayer & Life in the Spirit",
    "title": "Strengthened Within",
    "scripture": "Ephesians 3:14–19",
    "prayer": "Father, strengthen me through Your Spirit. Root me in the love of Christ, that my life may be formed by love rather than self-reliance. Amen.",
    "question": "Why does Paul connect inward strength with knowing the love of Christ?",
    "context": "Ephesians 3:14–21",
    "related": "John 15:1–17; 2 Corinthians 4:16–18"
  },
  {
    "id": "word-46",
    "category": "Prayer & Life in the Spirit",
    "title": "The Advocate Teaches",
    "scripture": "John 14:25–27",
    "prayer": "Lord Jesus, by Your Spirit teach me to remember Your words and receive Your peace. Keep me from substituting comfort for truth. Amen.",
    "question": "How is the peace Jesus gives different from the peace the world offers?",
    "context": "John 14:15–31",
    "related": "John 16:12–15; Isaiah 26:3"
  },
  {
    "id": "word-47",
    "category": "Prayer & Life in the Spirit",
    "title": "Walk by the Spirit",
    "scripture": "Galatians 5:16–25",
    "prayer": "Holy Spirit, lead me away from the desires that enslave and into the freedom of love. Grow Your fruit in my ordinary decisions. Amen.",
    "question": "How does Paul distinguish the works of the flesh from the fruit of the Spirit?",
    "context": "Galatians 5",
    "related": "Romans 8:1–17; John 15:1–8"
  },
  {
    "id": "word-48",
    "category": "Prayer & Life in the Spirit",
    "title": "Fellowship of the Spirit",
    "scripture": "2 Corinthians 13:11–14",
    "prayer": "God of peace, teach us to live in the grace of Christ, Your love, and the fellowship of the Holy Spirit. Heal the pride that keeps us apart. Amen.",
    "question": "What practical instructions surround Paul’s final blessing?",
    "context": "2 Corinthians 13",
    "related": "Philippians 2:1–11; Ephesians 4:1–6"
  },
  {
    "id": "word-49",
    "category": "Prayer & Life in the Spirit",
    "title": "Abounding in Hope",
    "scripture": "Romans 15:13",
    "prayer": "God of hope, fill me with joy and peace as I trust You. Let the Holy Spirit produce hope that can endure disappointment. Amen.",
    "question": "How does the surrounding chapter connect hope with welcoming one another?",
    "context": "Romans 15:1–13",
    "related": "Isaiah 11:1–10; 1 Peter 1:3–9"
  },
  {
    "id": "word-50",
    "category": "Prayer & Life in the Spirit",
    "title": "Boldness to Speak",
    "scripture": "Acts 4:23–31",
    "prayer": "Lord, grant courage to speak Your Word with gentleness and truth. Give me the strength to serve faithfully without seeking attention for myself. Amen.",
    "question": "What did the early believers ask for when they faced threats?",
    "context": "Acts 4:1–31",
    "related": "Acts 2:1–13; 2 Timothy 1:6–8"
  },
  {
    "id": "word-51",
    "category": "Wisdom & Discernment",
    "title": "Test the Spirits",
    "scripture": "1 John 4:1–6",
    "prayer": "Father, make me neither gullible nor cynical. Give me discernment rooted in the confession of Jesus Christ and the truth of Your Word. Amen.",
    "question": "What specific test does John give rather than simply urging suspicion?",
    "context": "1 John 4:1–12",
    "related": "1 Thessalonians 5:19–22; Matthew 7:15–20"
  },
  {
    "id": "word-52",
    "category": "Wisdom & Discernment",
    "title": "Wisdom from Above",
    "scripture": "James 3:13–18",
    "prayer": "Lord, expose selfish ambition where I call it wisdom. Make my conduct peaceable, gentle, merciful, and sincere. Amen.",
    "question": "Which qualities distinguish wisdom from above from earthly ambition?",
    "context": "James 3",
    "related": "Proverbs 9:1–12; Matthew 5:1–12"
  },
  {
    "id": "word-53",
    "category": "Wisdom & Discernment",
    "title": "Examine Everything",
    "scripture": "1 Thessalonians 5:19–22",
    "prayer": "God, keep me open to the Spirit without abandoning discernment. Help me hold fast to what is good and turn away from evil. Amen.",
    "question": "How can a believer avoid both quenching the Spirit and accepting every claim?",
    "context": "1 Thessalonians 5:12–24",
    "related": "Acts 17:10–12; 1 John 4:1–6"
  },
  {
    "id": "word-54",
    "category": "Faith, Trust & Obedience",
    "title": "Walking with God",
    "scripture": "Genesis 5:21–24",
    "prayer": "Lord, teach me to walk with You in the ordinary span of my days. Let faithfulness be more than a momentary feeling. Amen.",
    "question": "What does the brevity of Enoch’s description invite us to consider about a life with God?",
    "context": "Genesis 5:1–32",
    "related": "Hebrews 11:5–6; Micah 6:8"
  },
  {
    "id": "word-55",
    "category": "Faith, Trust & Obedience",
    "title": "Walk Humbly",
    "scripture": "Micah 6:6–8",
    "prayer": "Lord, turn me from outward display toward justice, mercy, and humble fellowship with You. Amen.",
    "question": "What does God require in contrast to the escalating offerings listed by the prophet?",
    "context": "Micah 6:1–16",
    "related": "Isaiah 1:10–20; Matthew 23:23"
  },
  {
    "id": "word-56",
    "category": "Repentance, Humility & Renewal",
    "title": "Create in Me a Clean Heart",
    "scripture": "Psalm 51:10–12",
    "prayer": "Have mercy on me, O God. Renew my heart and teach me repentance that leads to truthful living. Do not cast me away from Your presence. Amen.",
    "question": "What does David ask God to change within him, beyond the consequences of his sin?",
    "context": "Psalm 51",
    "related": "2 Samuel 12:1–15; Luke 18:9–14"
  },
  {
    "id": "word-57",
    "category": "Love, Marriage & Family",
    "title": "Love One Another",
    "scripture": "John 13:34–35",
    "prayer": "Lord Jesus, let the love You have shown become visible in the way I treat others, especially when love is costly. Amen.",
    "question": "How does Jesus make love among disciples a public witness?",
    "context": "John 13:1–38",
    "related": "1 John 4:7–21; 1 Corinthians 13"
  },
  {
    "id": "word-58",
    "category": "Spiritual Warfare & Perseverance",
    "title": "Stand in the Lord",
    "scripture": "Ephesians 6:10–18",
    "prayer": "Lord, strengthen me in Your might. Clothe my life with truth, righteousness, faith, salvation, and readiness to proclaim peace. Teach me to pray at all times. Amen.",
    "question": "Why does Paul place prayer alongside the imagery of armor?",
    "context": "Ephesians 6:10–20",
    "related": "Isaiah 59:15–21; 2 Corinthians 10:3–5"
  },
  {
    "id": "word-59",
    "category": "Suffering, Hope & Eternal Life",
    "title": "Hope in Suffering",
    "scripture": "Romans 5:1–5",
    "prayer": "Father, teach me to persevere without pretending suffering is good in itself. Let Your love, poured into our hearts through the Holy Spirit, sustain hope. Amen.",
    "question": "What sequence does Paul describe between suffering, endurance, character, and hope?",
    "context": "Romans 5:1–11",
    "related": "James 1:2–4; 2 Corinthians 4:7–18"
  },
  {
    "id": "word-60",
    "category": "Work, Stewardship & Responsibility",
    "title": "Work Heartily",
    "scripture": "Colossians 3:22–24",
    "prayer": "Lord, help me labor honestly and diligently, remembering that every person I serve bears dignity before You. Amen.",
    "question": "How does working for the Lord reshape the meaning of ordinary responsibilities?",
    "context": "Colossians 3:12–4:1",
    "related": "Ephesians 6:5–9; Psalm 90:17"
  },
  {
    "id": "word-61",
    "category": "God's Character & Holiness",
    "title": "The Name of Mercy",
    "scripture": "Exodus 34:5–9",
    "prayer": "Lord, reveal Your mercy without allowing me to overlook Your holiness. Shape my life around what You have shown of Yourself. Amen.",
    "question": "How does God's own declaration of His character challenge my assumptions about Him?",
    "context": "Exodus 33:12–34:9",
    "related": "Psalm 103:8–13; John 1:14–18"
  },
  {
    "id": "word-62",
    "category": "God's Character & Holiness",
    "title": "The Holy One",
    "scripture": "Isaiah 6:1–8",
    "prayer": "Holy God, open my eyes to Your majesty and my need for cleansing; teach me to answer Your call with humility. Amen.",
    "question": "What changes between Isaiah's first response to God's holiness and his final response?",
    "context": "Isaiah 6",
    "related": "Revelation 4:6–11; Luke 5:1–11"
  },
  {
    "id": "word-63",
    "category": "God's Character & Holiness",
    "title": "God Is Light",
    "scripture": "1 John 1:5–10",
    "prayer": "Father of light, bring what I conceal into Your truth and grant me courage to confess rather than pretend. Amen.",
    "question": "Why does John connect fellowship with God to walking honestly in the light?",
    "context": "1 John 1:1–2:2",
    "related": "John 3:19–21; Psalm 139:23–24"
  },
  {
    "id": "word-64",
    "category": "God's Character & Holiness",
    "title": "The Lord Is One",
    "scripture": "Deuteronomy 6:4–9",
    "prayer": "Lord, gather my divided attention into wholehearted love for You and faithfulness in ordinary life. Amen.",
    "question": "What does this command suggest about the relationship between worship and daily habits?",
    "context": "Deuteronomy 6:1–25",
    "related": "Mark 12:28–34; Psalm 86:11"
  },
  {
    "id": "word-65",
    "category": "God's Character & Holiness",
    "title": "Steadfast Love",
    "scripture": "Lamentations 3:19–26",
    "prayer": "Merciful God, meet me in the waiting and help me remember Your steadfast compassion amid difficulty. Amen.",
    "question": "What makes the confession of hope striking within the surrounding lament?",
    "context": "Lamentations 3:1–33",
    "related": "Psalm 130; Romans 8:31–39"
  },
  {
    "id": "word-66",
    "category": "Faith, Trust & Obedience",
    "title": "Faith and the Unseen",
    "scripture": "Hebrews 11:1–6",
    "prayer": "Lord, teach me to trust You faithfully where I cannot yet see the outcome. Amen.",
    "question": "How do the examples in Hebrews distinguish faith from certainty about circumstances?",
    "context": "Hebrews 10:32–11:16",
    "related": "Genesis 12:1–9; 2 Corinthians 5:6–10"
  },
  {
    "id": "word-67",
    "category": "Faith, Trust & Obedience",
    "title": "Hear and Do",
    "scripture": "James 1:19–27",
    "prayer": "God of wisdom, let hearing Your Word change the way I speak, listen, and act. Amen.",
    "question": "What does James identify as the danger of hearing without doing?",
    "context": "James 1",
    "related": "Matthew 7:24–27; Micah 6:8"
  },
  {
    "id": "word-68",
    "category": "Faith, Trust & Obedience",
    "title": "A Costly Yes",
    "scripture": "Luke 9:23–26",
    "prayer": "Jesus, give me courage to follow You when faithfulness costs comfort or approval. Amen.",
    "question": "What does Jesus mean by losing one's life in order to save it?",
    "context": "Luke 9:18–36",
    "related": "Mark 8:34–38; Philippians 3:7–11"
  },
  {
    "id": "word-69",
    "category": "Faith, Trust & Obedience",
    "title": "The Next Step",
    "scripture": "Proverbs 3:5–8",
    "prayer": "Father, keep me from mistaking my limited understanding for Your wisdom; direct my steps. Amen.",
    "question": "What would acknowledging God in my ways require today?",
    "context": "Proverbs 3:1–12",
    "related": "Psalm 37:3–7; James 4:13–17"
  },
  {
    "id": "word-70",
    "category": "Faith, Trust & Obedience",
    "title": "Faith That Works",
    "scripture": "James 2:14–26",
    "prayer": "Lord, guard me against faith that remains only a claim; grow in me the works of mercy. Amen.",
    "question": "How does James use Abraham and Rahab to explain living faith?",
    "context": "James 2",
    "related": "Ephesians 2:8–10; Matthew 25:31–46"
  },
  {
    "id": "word-71",
    "category": "Repentance, Humility & Renewal",
    "title": "A Broken Spirit",
    "scripture": "Psalm 51:1–17",
    "prayer": "God of mercy, receive my confession without excuse and renew a willing spirit within me. Amen.",
    "question": "What does David seek beyond the removal of guilt?",
    "context": "Psalm 51",
    "related": "Luke 18:9–14; 2 Corinthians 7:8–11"
  },
  {
    "id": "word-72",
    "category": "Repentance, Humility & Renewal",
    "title": "Return to Me",
    "scripture": "Joel 2:12–17",
    "prayer": "Lord, draw me beyond outward appearances into genuine repentance and restored love. Amen.",
    "question": "Why does Joel emphasize the heart rather than outward signs alone?",
    "context": "Joel 2:1–27",
    "related": "Hosea 6:1–6; Acts 3:19–21"
  },
  {
    "id": "word-73",
    "category": "Repentance, Humility & Renewal",
    "title": "The Tax Collector",
    "scripture": "Luke 18:9–14",
    "prayer": "Merciful God, strip away comparison and teach me to come before You truthfully. Amen.",
    "question": "What distinguishes the two men's prayers in Jesus' parable?",
    "context": "Luke 18:1–17",
    "related": "Psalm 51; Romans 3:21–26"
  },
  {
    "id": "word-74",
    "category": "Repentance, Humility & Renewal",
    "title": "The Father's Welcome",
    "scripture": "Luke 15:11–32",
    "prayer": "Father, bring me home from both rebellion and resentment, and teach me to rejoice in Your mercy. Amen.",
    "question": "How do both sons misunderstand their relationship with their father?",
    "context": "Luke 15",
    "related": "Hosea 11:1–9; 2 Corinthians 5:16–21"
  },
  {
    "id": "word-75",
    "category": "Repentance, Humility & Renewal",
    "title": "Put Off and Put On",
    "scripture": "Colossians 3:1–17",
    "prayer": "Lord Jesus, help me relinquish what destroys love and practice what reflects Your character. Amen.",
    "question": "What does Paul place at the center of the renewed community?",
    "context": "Colossians 3",
    "related": "Ephesians 4:17–32; Galatians 5:16–26"
  },
  {
    "id": "word-76",
    "category": "Wisdom & Discernment",
    "title": "A Listening Heart",
    "scripture": "1 Kings 3:5–14",
    "prayer": "God, grant me a listening heart that seeks justice and serves others rather than personal advantage. Amen.",
    "question": "What does Solomon's request reveal about his understanding of leadership?",
    "context": "1 Kings 3:1–28",
    "related": "James 1:5–8; Proverbs 2:1–11"
  },
  {
    "id": "word-77",
    "category": "Wisdom & Discernment",
    "title": "Test the Spirits",
    "scripture": "1 John 4:1–6",
    "prayer": "Spirit of truth, grant discernment without suspicion and conviction without arrogance. Amen.",
    "question": "What standard does John give his readers for testing spiritual claims?",
    "context": "1 John 4",
    "related": "John 16:12–15; 1 Thessalonians 5:19–22"
  },
  {
    "id": "word-78",
    "category": "Wisdom & Discernment",
    "title": "The Fear of the Lord",
    "scripture": "Proverbs 9:7–12",
    "prayer": "Holy God, let reverence for You correct both pride and careless judgment. Amen.",
    "question": "How does reverence for God change the way wisdom is received?",
    "context": "Proverbs 9",
    "related": "Job 28:20–28; Psalm 111:10"
  },
  {
    "id": "word-79",
    "category": "Wisdom & Discernment",
    "title": "Slow to Speak",
    "scripture": "James 3:1–18",
    "prayer": "Lord, teach me to restrain harmful words and seek wisdom that makes peace. Amen.",
    "question": "How does James distinguish wisdom from above from bitter ambition?",
    "context": "James 3",
    "related": "Proverbs 15:1–4; Matthew 12:33–37"
  },
  {
    "id": "word-80",
    "category": "Wisdom & Discernment",
    "title": "Seek What Is True",
    "scripture": "Philippians 4:4–9",
    "prayer": "Father, direct my thoughts toward what is true and worthy without turning away from suffering. Amen.",
    "question": "How does Paul's instruction about thought connect with his call to prayer?",
    "context": "Philippians 4:1–13",
    "related": "Romans 12:1–2; Psalm 19:7–14"
  },
  {
    "id": "word-81",
    "category": "Prayer & Life in the Spirit",
    "title": "The Spirit Gives Life",
    "scripture": "Romans 8:1–11",
    "prayer": "Holy Spirit, awaken in me a life directed toward Christ and a mind attentive to Your leading. Amen.",
    "question": "What contrast does Paul draw between life according to the flesh and life in the Spirit?",
    "context": "Romans 8",
    "related": "Ezekiel 36:25–27; John 6:60–69"
  },
  {
    "id": "word-82",
    "category": "Prayer & Life in the Spirit",
    "title": "Abba, Father",
    "scripture": "Romans 8:12–17",
    "prayer": "Father, teach me to pray as Your child, neither entitled nor afraid. Amen.",
    "question": "How does the Spirit's witness change the way believers approach God?",
    "context": "Romans 8:1–27",
    "related": "Galatians 4:4–7; Luke 11:1–13"
  },
  {
    "id": "word-83",
    "category": "Prayer & Life in the Spirit",
    "title": "The Helper",
    "scripture": "John 14:15–27",
    "prayer": "Lord Jesus, let the Spirit of truth remind me of Your words and lead me into obedience. Amen.",
    "question": "What relationship does Jesus describe between love, obedience, and the Spirit?",
    "context": "John 14",
    "related": "John 16:5–15; Acts 2:1–21"
  },
  {
    "id": "word-84",
    "category": "Prayer & Life in the Spirit",
    "title": "The Spirit Intercedes",
    "scripture": "Romans 8:22–27",
    "prayer": "Holy Spirit, help me when words fail and my understanding is small. Amen.",
    "question": "What comfort does Paul offer to those who do not know how to pray?",
    "context": "Romans 8:18–39",
    "related": "Psalm 13; Hebrews 7:23–28"
  },
  {
    "id": "word-85",
    "category": "Prayer & Life in the Spirit",
    "title": "Ask for the Spirit",
    "scripture": "Luke 11:5–13",
    "prayer": "Father, give me Your Holy Spirit and teach me to ask with trust rather than demand. Amen.",
    "question": "How does Jesus use the comparison with earthly parents to describe God's generosity?",
    "context": "Luke 11:1–13",
    "related": "Matthew 7:7–11; Acts 1:4–8"
  },
  {
    "id": "word-86",
    "category": "Spiritual Warfare & Perseverance",
    "title": "Watch and Pray",
    "scripture": "Matthew 26:36–46",
    "prayer": "Lord Jesus, meet me in weakness and teach me vigilance joined to surrender. Amen.",
    "question": "How do Jesus' prayer and the disciples' sleep illuminate the struggle against temptation?",
    "context": "Matthew 26:30–56",
    "related": "Luke 22:39–46; Hebrews 4:14–16"
  },
  {
    "id": "word-87",
    "category": "Spiritual Warfare & Perseverance",
    "title": "Resist the Devil",
    "scripture": "James 4:1–10",
    "prayer": "God, humble my divided desires and strengthen me to resist evil by drawing near to You. Amen.",
    "question": "Why does James begin his call to resistance with submission to God?",
    "context": "James 4",
    "related": "1 Peter 5:6–11; Ephesians 6:10–18"
  },
  {
    "id": "word-88",
    "category": "Spiritual Warfare & Perseverance",
    "title": "The Armor of Light",
    "scripture": "Romans 13:11–14",
    "prayer": "Lord Jesus, awaken me from complacency and clothe me in a life shaped by Your light. Amen.",
    "question": "What practical conduct does Paul associate with putting on Christ?",
    "context": "Romans 12:9–13:14",
    "related": "Ephesians 6:10–18; 1 Thessalonians 5:4–11"
  },
  {
    "id": "word-89",
    "category": "Spiritual Warfare & Perseverance",
    "title": "Sober and Watchful",
    "scripture": "1 Peter 5:6–11",
    "prayer": "Father, help me cast my anxieties upon You while remaining watchful and steadfast. Amen.",
    "question": "How are humility, anxiety, and resistance connected in this passage?",
    "context": "1 Peter 5",
    "related": "James 4:6–10; Psalm 55:16–23"
  },
  {
    "id": "word-90",
    "category": "Spiritual Warfare & Perseverance",
    "title": "Endure in Hope",
    "scripture": "Hebrews 12:1–3",
    "prayer": "Jesus, steady my attention on You when weariness tempts me to give up. Amen.",
    "question": "Why does Hebrews place Jesus at the center of perseverance?",
    "context": "Hebrews 11:32–12:17",
    "related": "2 Timothy 4:6–8; Isaiah 40:27–31"
  },
  {
    "id": "word-91",
    "category": "Love, Marriage & Family",
    "title": "The Greater Way",
    "scripture": "1 Corinthians 13:1–13",
    "prayer": "Lord, form in me a love that is patient, truthful, and willing to serve. Amen.",
    "question": "Why does Paul place love above impressive spiritual gifts?",
    "context": "1 Corinthians 12:27–14:1",
    "related": "John 13:34–35; 1 John 4:7–21"
  },
  {
    "id": "word-92",
    "category": "Love, Marriage & Family",
    "title": "Serve One Another",
    "scripture": "Galatians 5:13–15",
    "prayer": "Jesus, let my freedom become an opportunity to serve rather than to insist on my own way. Amen.",
    "question": "What does Paul say Christian freedom is for?",
    "context": "Galatians 5",
    "related": "Mark 10:42–45; Philippians 2:1–11"
  },
  {
    "id": "word-93",
    "category": "Love, Marriage & Family",
    "title": "Bear One Another's Burdens",
    "scripture": "Galatians 6:1–10",
    "prayer": "Father, teach me to restore gently and carry burdens without pride. Amen.",
    "question": "How can someone bear another's burden while examining their own conduct?",
    "context": "Galatians 5:25–6:10",
    "related": "Romans 12:9–21; James 5:13–20"
  },
  {
    "id": "word-94",
    "category": "Love, Marriage & Family",
    "title": "The Household of Faith",
    "scripture": "Ephesians 5:21–33",
    "prayer": "Lord, teach our homes mutual care, sacrificial love, and reverence for Christ. Amen.",
    "question": "How does Paul's picture of Christ's self-giving shape the responsibilities he describes?",
    "context": "Ephesians 5:1–6:9",
    "related": "Colossians 3:12–21; John 13:1–17"
  },
  {
    "id": "word-95",
    "category": "Love, Marriage & Family",
    "title": "Teach the Next Generation",
    "scripture": "Deuteronomy 6:4–9",
    "prayer": "Father, let faith be visible in the way we live, speak, and care for those entrusted to us. Amen.",
    "question": "Why does Moses place teaching children within everyday routines?",
    "context": "Deuteronomy 6",
    "related": "Psalm 78:1–8; 2 Timothy 1:3–7"
  },
  {
    "id": "word-96",
    "category": "Work, Stewardship & Responsibility",
    "title": "Faithful with Little",
    "scripture": "Luke 16:1–13",
    "prayer": "Lord, make me trustworthy in small responsibilities and free me from serving wealth. Amen.",
    "question": "What does Jesus connect to faithfulness in small things?",
    "context": "Luke 16:1–15",
    "related": "Matthew 25:14–30; 1 Peter 4:7–11"
  },
  {
    "id": "word-97",
    "category": "Work, Stewardship & Responsibility",
    "title": "Do Justice",
    "scripture": "Micah 6:6–8",
    "prayer": "God, lead me toward justice, mercy, and humble fellowship with You. Amen.",
    "question": "What contrast does the prophet draw between religious offerings and faithful living?",
    "context": "Micah 6",
    "related": "Isaiah 1:10–20; Matthew 23:23–28"
  },
  {
    "id": "word-98",
    "category": "Work, Stewardship & Responsibility",
    "title": "Rest Is Holy",
    "scripture": "Exodus 20:8–11",
    "prayer": "Creator God, teach me to receive rest as a gift rather than measure my worth by productivity. Amen.",
    "question": "What does the Sabbath command reveal about God's care for human limits?",
    "context": "Exodus 20:1–17",
    "related": "Mark 2:23–28; Hebrews 4:1–11"
  },
  {
    "id": "word-99",
    "category": "Work, Stewardship & Responsibility",
    "title": "A Generous Heart",
    "scripture": "2 Corinthians 9:6–15",
    "prayer": "Father, free me from reluctant generosity and teach me to share with joy and wisdom. Amen.",
    "question": "What motive for giving does Paul emphasize?",
    "context": "2 Corinthians 8–9",
    "related": "Proverbs 11:24–25; Acts 20:32–35"
  },
  {
    "id": "word-100",
    "category": "Work, Stewardship & Responsibility",
    "title": "Number Our Days",
    "scripture": "Psalm 90:1–17",
    "prayer": "Eternal God, teach me to use fleeting days with wisdom, love, and faithful work. Amen.",
    "question": "How does awareness of life's brevity shape the psalmist's requests?",
    "context": "Psalm 90",
    "related": "Ecclesiastes 3:1–15; James 4:13–17"
  },
  {
    "id": "word-101",
    "category": "Suffering, Hope & Eternal Life",
    "title": "God in the Storm",
    "scripture": "Mark 4:35–41",
    "prayer": "Lord Jesus, stay near me when fear overwhelms my understanding. Amen.",
    "question": "What do the disciples learn about Jesus through the storm?",
    "context": "Mark 4:35–5:20",
    "related": "Psalm 107:23–32; Matthew 14:22–33"
  },
  {
    "id": "word-102",
    "category": "Suffering, Hope & Eternal Life",
    "title": "A Time for Lament",
    "scripture": "Psalm 13",
    "prayer": "God, receive my grief honestly and teach me to remember Your mercy even when answers are delayed. Amen.",
    "question": "How does the psalm move from complaint toward trust without explaining the suffering?",
    "context": "Psalm 13",
    "related": "Psalm 42; Romans 8:18–27"
  },
  {
    "id": "word-103",
    "category": "Suffering, Hope & Eternal Life",
    "title": "The God Who Sees",
    "scripture": "Genesis 16:7–14",
    "prayer": "Lord, see those who are overlooked, and correct my blindness to their suffering. Amen.",
    "question": "What does Hagar's encounter reveal about God's attention to the vulnerable?",
    "context": "Genesis 16",
    "related": "Psalm 139; Luke 1:46–55"
  },
  {
    "id": "word-104",
    "category": "Suffering, Hope & Eternal Life",
    "title": "Treasure in Clay",
    "scripture": "2 Corinthians 4:7–18",
    "prayer": "Father, sustain me in weakness so that hope rests in Your power rather than my strength. Amen.",
    "question": "How does Paul hold suffering and resurrection hope together?",
    "context": "2 Corinthians 4–5",
    "related": "Romans 8:18–39; Psalm 116"
  },
  {
    "id": "word-105",
    "category": "Suffering, Hope & Eternal Life",
    "title": "All Things New",
    "scripture": "Revelation 21:1–7",
    "prayer": "God, keep my hope anchored in Your promised renewal and teach me to live faithfully now. Amen.",
    "question": "What does the promise of God's dwelling with humanity reveal about the future?",
    "context": "Revelation 21–22",
    "related": "Isaiah 65:17–25; John 14:1–6"
  },
  {
    "id": "word-106",
    "category": "Prayer & Life in the Spirit",
    "title": "Pray Without Ceasing",
    "scripture": "1 Thessalonians 5:12–24",
    "prayer": "Holy Spirit, turn ordinary moments toward prayer, gratitude, and discernment. Amen.",
    "question": "How do Paul's short instructions describe a continuous posture rather than a timed exercise?",
    "context": "1 Thessalonians 5",
    "related": "Luke 18:1–8; Colossians 4:2–6"
  },
  {
    "id": "word-107",
    "category": "God's Character & Holiness",
    "title": "The Good Shepherd",
    "scripture": "Psalm 23",
    "prayer": "Shepherd of my soul, guide me through uncertainty and teach me to trust Your care. Amen.",
    "question": "How does the psalm portray God's presence in both rest and danger?",
    "context": "Psalm 23",
    "related": "John 10:1–18; Ezekiel 34:11–16"
  },
  {
    "id": "word-108",
    "category": "Wisdom & Discernment",
    "title": "The Wisdom of the Cross",
    "scripture": "1 Corinthians 1:18–31",
    "prayer": "Lord Jesus, correct my attraction to worldly power and teach me to recognize Your wisdom in humility. Amen.",
    "question": "How does Paul overturn ordinary measures of strength and wisdom?",
    "context": "1 Corinthians 1–2",
    "related": "Isaiah 29:13–16; Philippians 2:5–11"
  },
  {
    "id": "word-109",
    "category": "Love, Marriage & Family",
    "title": "Forgive as Forgiven",
    "scripture": "Matthew 18:21–35",
    "prayer": "Merciful Father, free me from bitterness and teach me to forgive without denying the reality of harm. Amen.",
    "question": "What does Jesus' parable reveal about receiving mercy and extending it?",
    "context": "Matthew 18",
    "related": "Ephesians 4:25–32; Colossians 3:12–17"
  },
  {
    "id": "word-110",
    "category": "Faith, Trust & Obedience",
    "title": "Mary's Yes",
    "scripture": "Luke 1:26–38",
    "prayer": "Lord, give me a listening heart and courage to respond faithfully when Your call unsettles my plans. Amen.",
    "question": "What does Mary's question reveal about the difference between seeking understanding and refusing trust?",
    "context": "Luke 1:26–56",
    "related": "1 Samuel 1:9–20; Luke 2:19"
  }
];
