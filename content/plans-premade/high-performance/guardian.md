---
title: "Guardian"
draft: false
category: "High Performance"
weight: 7

product:
  id: "guardian"
  name: "Guardian"
  price: "58.80"

  customFields:
    - name: "RAM"
      type: "readonly"
      value: "14 GiB"

    - name: "STORAGE"
      type: "readonly"
      value: "140 GiB"

    - name: "nodemodel"
      type: "hidden"
      value: "m3"

    - name: "DATABASES"
      type: "readonly"
      value: 1

    - name: "SNAPSHOTS"
      type: "readonly"
      value: 10
      
    - name: "PANEL USERS"
      type: "readonly"
      value: 10
      
    - name: "SERVER TYPE"
      options: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 58.80
---