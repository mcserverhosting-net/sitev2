---
title: "Ender Dragon"
draft: false
category: "High Performance"
weight: 1

product:
  id: "ender-dragon"
  name: "Ender Dragon"
  price: "8.40"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "2 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "20 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m3"

    - name: "DATABASES"
      type: "readonly"
      value: 4

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 15
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 50
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 8.40

---