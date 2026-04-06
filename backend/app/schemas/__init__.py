from pydantic import BaseModel
from datetime import datetime
from typing import Optional

# Client Schemas
class ClientCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None

class ClientResponse(BaseModel):
    id: int
    name: str
    email: str
    phone: Optional[str]
    company: Optional[str]
    created_at: datetime
    
    class Config:
        from_attributes = True

# Project Schemas
class ProjectCreate(BaseModel):
    name: str
    description: Optional[str] = None
    client_id: int
    hourly_rate: Optional[float] = None
    budget: Optional[float] = None

class ProjectResponse(BaseModel):
    id: int
    name: str
    description: Optional[str]
    status: str
    hourly_rate: Optional[float]
    budget: Optional[float]
    created_at: datetime
    
    class Config:
        from_attributes = True

# TimeEntry Schemas
class TimeEntryCreate(BaseModel):
    project_id: int
    hours: float
    description: Optional[str] = None

class TimeEntryResponse(BaseModel):
    id: int
    project_id: int
    hours: float
    description: Optional[str]
    created_at: datetime
    
    class Config:
        from_attributes = True

# Income Schemas
class IncomeCreate(BaseModel):
    amount: float
    description: Optional[str] = None

class IncomeResponse(BaseModel):
    id: int
    amount: float
    description: Optional[str]
    date: datetime
    created_at: datetime
    
    class Config:
        from_attributes = True

# Invoice Schemas
class InvoiceCreate(BaseModel):
    client_id: int
    amount: float

class InvoiceResponse(BaseModel):
    id: int
    number: str
    client_id: int
    amount: float
    status: str
    created_at: datetime
    
    class Config:
        from_attributes = True
