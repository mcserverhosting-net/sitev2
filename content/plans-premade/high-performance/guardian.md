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
      value: "14 GB"

    - name: "Storage"
      type: "readonly"
      value: "140GB"

    - name: "nodemodel"
      type: "readonly"
      value: "m1"

    - name: "database"
      type: "readonly"
      value: 1

    - name: "snapshots"
      type: "readonly"
      value: 10
      
    - name: "allocations"
      type: "readonly"
      value: 10
      
    - name: "servertype"
      value: "vanilla|paper|fabric|spongevanilla|forge"


  selectedPlan: "monthly-plan"

  availablePlans:
    - id: "monthly-plan"
      name: "Monthly Subscription"
      frequency: "monthly"
      interval: 1
      itemPrice: 58.80
---